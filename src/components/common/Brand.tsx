import React from "react";
import styled from "styled-components";

import { Row, Span } from "../base";
import { Badge } from "./Badge";

type Props = {
  onClick?: () => void;
};

export const Brand = React.memo(({ onClick }: Props) => (
  <Row>
    <Logo onClick={onClick}>
      <Span selectable clickable>
        <Span>🏗️</Span> <Span color="font1">setup</Span>
        <Span color="purple">-</Span>
        <Span color="font1">script</Span>
      </Span>
    </Logo>
    <Badge>MacOS BETA</Badge>
  </Row>
));

const Logo = styled.h4`
  user-select: none;
  margin: 0;
  font-weight: 900;
  font-size: 24px;

  &:hover {
    -webkit-text-stroke: 0.1px white;
  }
`;
