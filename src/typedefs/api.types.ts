import { SafeRegistry } from './app.types';

export type ApiResponse = {
  error?: string;
};

export type CreateRegistryApiResponse = ApiResponse & {
  success: boolean;
};

export type GetRegistriesApiResponse = ApiResponse & {
  registries: SafeRegistry[];
};
