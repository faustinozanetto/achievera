import { DailyRegistry } from "@prisma/client";

export type SessionUser = {
  name: string;
  email: string;
  image: string;
};

export type AuthOption = "github";

export type SafeRegistry = Pick<DailyRegistry, "content" | "createdAt">;
