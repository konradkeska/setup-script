import React from "react";
import Sc from "styled-components";

import { Theme } from "types";

import { Emoji, Wrapper } from "components/atoms";
import { Toggle } from "components/molecules";
import { APP } from "config";

interface IProps {
  children: React.ReactNode;
  mode: Theme;
  switchTheme: () => void;
}

export const Footer = React.memo(({ mode, switchTheme, children }: IProps) => (
  <Container>
    <Wrapper maxW="100%">
      <Toggle
        id="theme-toggle"
        aria-label="toggle display mode"
        defaultChecked={mode === Theme.DARK}
        onChange={switchTheme}
        checkedIcon={<Emoji>☀️</Emoji>}
        uncheckedIcon={<Emoji>🌙</Emoji>}
      />
      {children}
    </Wrapper>
  </Container>
));

const Container = Sc.footer`
  height: ${APP.FOOTER_HEIGHT}px;
  width: 100%;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: margin 500ms;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.colors.material.overlay};
  color: ${({ theme }) => theme.colors.font.base};
  box-shadow: ${({ theme }) => theme.shadows.footer};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.material.input}`};
`;
