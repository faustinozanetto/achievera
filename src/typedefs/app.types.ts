import { DefaultSession } from "next-auth";

export type SessionUser = NonNullable<DefaultSession["user"]>;
