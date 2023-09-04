"use client";

import React from "react";
import { ThemeProvider } from "next-theme-kit";
import { ToastsProvider } from "@state/toasts/toasts-context";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider useLocalStorage useSystem={false}>
      <ToastsProvider>{children}</ToastsProvider>
    </ThemeProvider>
  );
};

export default Providers;
