import { DailyRegistry } from '@prisma/client';

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        payload: M[Key];
        type: Key;
      };
};

export type SessionUser = {
  email: string;
  image: string;
  name: string;
};

export type AuthOption = 'github';

export type SafeRegistry = Pick<DailyRegistry, 'content' | 'createdAt'>;
