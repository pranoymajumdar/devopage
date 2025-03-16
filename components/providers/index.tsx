import { type ReactNode } from "react";

import { ThemeProvider } from "./theme";

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
