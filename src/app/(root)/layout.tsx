import React from 'react';

import { RegistriesProvider } from '@state/registries/registries-context';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return <RegistriesProvider>{children}</RegistriesProvider>;
}
