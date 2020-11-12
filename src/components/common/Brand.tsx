import React from "react";
import styled from "styled-components";
import { FontColors, PrimaryColors } from "../../types";

import { Row, Span } from "../base";
import { Badge } from "./Badge";

type Props = {
  onClick?: () => void;
};

export const Brand = React.memo(({ onClick }: Props) => (
  <Row>
    <Logo id="brand" onClick={onClick}>
      <Span selectable clickable>
        <Span>🏗️</Span> <Span color={FontColors.BASE}>setup</Span>
        <Span color={PrimaryColors.PURPLE}>-</Span>
        <Span color={FontColors.BASE}>script</Span>
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
