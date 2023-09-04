import { authOptions } from "@lib/auth.lib";
import { prisma } from "@lib/database.lib";
import { registriesCreateValidationSchema } from "@lib/validations.lib";
import { SafeRegistry } from "@typedefs/app.types";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const registries = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: {
      registries: {
        orderBy: { createdAt: "asc" },
      },
    },
  });
  if (!registries) return NextResponse.json({ registries: [] });

  const mappedRegistries: SafeRegistry[] = registries.registries.map(
    (registry) => ({ content: registry.content, createdAt: registry.createdAt })
  );

  return NextResponse.json({ registries: mappedRegistries });
};

export const POST = async (request: Request) => {
  const res = await request.json();

  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const response = registriesCreateValidationSchema.safeParse(res);
  if (!response.success) {
    const { errors } = response.error;

    return NextResponse.json(
      {
        error: { message: "Invalid request", errors },
      },
      { status: 400 }
    );
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

  return NextResponse.json({ success: true });
};
