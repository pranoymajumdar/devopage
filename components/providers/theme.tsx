"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const NextThemesProvider = dynamic(() => import("next-themes").then((e) => e.ThemeProvider), {
  ssr: false,
});

export function ThemeProvider({ children }: React.ComponentProps<typeof NextThemesProvider>) {
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
