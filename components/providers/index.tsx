import { type ReactNode } from "react";

import { TanstackProvider } from "./tanstack";
import { ThemeProvider } from "./theme";

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  return (
    <TanstackProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TanstackProvider>
  );
};
