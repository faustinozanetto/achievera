import { SafeRegistry } from './registries.types';

export type ApiResponse = {
  error?: string;
};

export type CreateRegistryApiResponse = ApiResponse & {
  success: boolean;
};

export type DeleteAccountApiResponse = ApiResponse & {
  success: boolean;
};

export type GetRegistriesApiResponse = ApiResponse & {
  hasMore: boolean;
  registries: SafeRegistry[];
};
