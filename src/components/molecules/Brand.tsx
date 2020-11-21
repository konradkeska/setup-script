import React from "react";
import Sc from "styled-components";

import { FontColors, PrimaryColors } from "types";
import { Link, Row, Span } from "../atoms";
import { Badge } from "./Badge";

type Props = {
  onClick?: () => void;
};

export const Brand = React.memo(({ onClick }: Props) => (
  <Row>
    <Logo id="brand" onClick={onClick}>
      <Span>
        <Span>🏗️</Span> <Span color={FontColors.BASE}>setup</Span>
        <Span color={PrimaryColors.PURPLE}>-</Span>
        <Span color={FontColors.BASE}>script</Span>
      </Span>
    </Logo>
    <Badge>
      <IssueLink href="https://github.com/konradkeska/setup-script/issues">
        MacOS BETA
      </IssueLink>
    </Badge>
  </Row>
));

const IssueLink = Sc(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.font.base};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.purple};
  }
`;

const Logo = Sc.h1`
  user-select: none;
  margin: 0;
  font-weight: 900;
  font-size: 24px;
`;
