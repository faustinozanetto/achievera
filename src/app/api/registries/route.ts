import prisma from '@lib/database.lib';
import { authOptions } from '@lib/auth.lib';
import { registriesCreateValidationSchema } from '@lib/validations.lib';
import { CreateRegistryApiResponse, GetRegistriesApiResponse } from '@typedefs/api.types';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { SafeRegistry } from '@typedefs/registries.types';

export const GET = async (request: Request) => {
  try {
    const url = new URL(request.url);
    const take = Number(url.searchParams.get('take')) ?? 4;
    const skip = Number(url.searchParams.get('skip')) ?? 0;

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      const data: GetRegistriesApiResponse = {
        error: 'Unauthorized',
        hasMore: false,
        registries: [],
      };

      return NextResponse.json(data, { status: 403 });
    }

    const registries = (await prisma.user.findUnique({
      where: { email: session.user.email! },
      select: {
        registries: {
          orderBy: { createdAt: 'desc' },
          take: take + 1, // Fetch one more to check if there are more
          skip,
        },
      },
    })) ?? { registries: [] };

    // Check if there are more registries beyond what's fetched
    const hasMore = registries.registries.length > take;

    // If there are more, remove the extra registry used for checking
    if (hasMore) {
      registries.registries.pop();
    }

    // Map registries so that we only return content and date.
    const mappedRegistries: SafeRegistry[] = registries.registries.map((registry) => ({
      id: registry.id,
      content: registry.content,
      createdAt: registry.createdAt,
    }));

    const data: GetRegistriesApiResponse = {
      registries: mappedRegistries,
      hasMore,
    };

    return NextResponse.json(data);
  } catch (err) {
    return new NextResponse('Internal Error', { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const res = await request.json();

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      const data: CreateRegistryApiResponse = {
        error: 'Unauthorized',
        success: false,
      };

      return NextResponse.json(data, { status: 403 });
    }

    const response = registriesCreateValidationSchema.safeParse(res);
    if (!response.success) {
      const data: CreateRegistryApiResponse = {
        error: 'Invalid request!',
        success: false,
      };
      return NextResponse.json(data, { status: 400 });
    }

    const { content } = response.data;

    await prisma.dailyRegistry.create({
      data: {
        content,
        user: {
          connect: {
            email: session.user.email!,
          },
        },
      },
    });

    const data: CreateRegistryApiResponse = {
      success: true,
    };

    return NextResponse.json(data);
  } catch (err) {
    return new NextResponse('Internal Error', { status: 500 });
  }
};
