'use client';

import React from 'react';
import { ThemeProvider } from 'next-theme-kit';
import { ToastsProvider } from '@state/toasts/toasts-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider useLocalStorage useSystem={false}>
        <ToastsProvider>{children}</ToastsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
