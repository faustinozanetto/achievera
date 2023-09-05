'use client';

import { ToastContext } from '@state/toasts/toasts-context';
import { useContext } from 'react';

/**
 * Hook that returns the toast context.
 * @returns The context if valid.
 */
export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('Tried to use ToastContext with no context avaiable!');
  return context;
};
