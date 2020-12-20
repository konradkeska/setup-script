import React from "react";
import { Toaster } from "react-hot-toast";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { Sprites, UsageTour, GlobalStyle } from "components/global";
import { toColorString } from "utils";
import { FontColor, MaterialColor } from "types";

type Props = {
  children: React.ReactNode;
  theme: DefaultTheme;
};

const Global = React.memo(({ children, theme }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Sprites />
    <UsageTour theme={theme} />
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: toColorString(MaterialColor.INPUT, theme),
          color: toColorString(FontColor.BASE, theme),
        },
      }}
      reverseOrder
    />
    {children}
  </ThemeProvider>
));

export { Global };
