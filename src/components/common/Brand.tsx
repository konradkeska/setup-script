import React from "react";
import styled from "styled-components";

import { Theme } from "../../themes";
import { Span } from "../base";
import { Badge } from "./Badge";

export function Brand({
  theme,
  onClick,
}: {
  theme: Theme;
  onClick?: () => void;
}) {
  return (
    <>
      <Logo onClick={onClick}>
        <Span>🏗️</Span> <Span color={theme.colors.font1}>setup</Span>
        <Span color={theme.colors.purple}>-</Span>
        <Span color={theme.colors.font1}>script</Span>
      </Logo>
      <Badge theme={theme}>MacOS BETA</Badge>
    </>
  );
}

const Logo = styled.h4`
  user-select: none;
  margin: 0;
  font-weight: 900;
  font-size: 24px;

  &:hover {
    -webkit-text-stroke: 0.1px white;
  }
`;
