import React from "react";
import { highlight,future } from '@mdx-deck/themes';
import ThemeProvider, { LumosLight } from "@loanpal/lumos__theme";
import { MDXProvider } from "@mdx-js/react";

const Provider = ({ children }) => (
  <ThemeProvider theme={LumosLight}>
    {children}
  </ThemeProvider>
);

export const theme = {
  ...future,
  ...highlight
};
