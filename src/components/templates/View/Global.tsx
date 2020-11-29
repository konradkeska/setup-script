import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { Sprites, UsageTour, GlobalStyle } from "components/global";

type Props = {
  children: React.ReactNode;
  theme: DefaultTheme;
};

const Global = React.memo(({ children, theme }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Sprites />
    <UsageTour theme={theme} />
    {children}
  </ThemeProvider>
));

export { Global };
