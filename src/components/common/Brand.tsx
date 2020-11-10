import React from "react";
import styled from "styled-components";

import { Span } from "../base";
import { Badge } from "./Badge";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Logo onClick={onClick}>
        <Span>🏗️</Span> <Span color="font1">setup</Span>
        <Span color="purple">-</Span>
        <Span color="font1">script</Span>
      </Logo>
      <Badge>MacOS BETA</Badge>
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
