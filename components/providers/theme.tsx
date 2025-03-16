"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { useIsMounted } from "@/hooks/useIsMounted";

export function ThemeProvider({ children }: React.ComponentProps<typeof NextThemesProvider>) {
  const isMounted = useIsMounted();
  if (!isMounted) return children;
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
