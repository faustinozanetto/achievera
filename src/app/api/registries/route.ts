import { authOptions } from '@lib/auth.lib';
import { prisma } from '@lib/database.lib';
import { registriesCreateValidationSchema } from '@lib/validations.lib';
import { CreateRegistryApiResponse, GetRegistriesApiResponse } from '@typedefs/api.types';
import { SafeRegistry } from '@typedefs/app.types';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    const data: CreateRegistryApiResponse = {
      error: 'Unauthorized',
      success: false,
    };

    return NextResponse.json(data, { status: 403 });
  }

  const registries = (await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: {
      registries: {
        orderBy: { createdAt: 'desc' },
      },
    },
  })) ?? { registries: [] };

  // Map registries so that we only return content and date.
  const mappedRegistries: SafeRegistry[] = registries.registries.map((registry) => ({
    content: registry.content,
    createdAt: registry.createdAt,
  }));

  const data: GetRegistriesApiResponse = {
    registries: mappedRegistries,
  };

  return NextResponse.json(data);
};

export const POST = async (request: Request) => {
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
};
