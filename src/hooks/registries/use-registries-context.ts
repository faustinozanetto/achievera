'use client';

import { RegistriesContext } from '@state/registries/registries-context';
import { useContext } from 'react';

/**
 * Hook that returns the Registries context.
 * @returns The context if valid.
 */
export const useRegistriesContext = () => {
  const context = useContext(RegistriesContext);
  if (!context) throw new Error('Tried to use RegistriesContext with no context avaiable!');
  return context;
};
