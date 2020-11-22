import React from "react";
import Sc from "styled-components";

import { ISSUES_LINK } from "components/config";
import { FontColors, PrimaryColors } from "types";
import { Link, Row, Span } from "../atoms";
import { Badge } from "./Badge";

type Props = {
  onClick?: () => void;
  id?: string;
  badgeId?: string;
};

export const Brand = React.memo(({ onClick, id, badgeId }: Props) => (
  <Row>
    <Logo id={id} onClick={onClick}>
      <Span>
        <Span>🏗️</Span> <Span color={FontColors.BASE}>setup</Span>
        <Span color={PrimaryColors.PURPLE}>-</Span>
        <Span color={FontColors.BASE}>script</Span>
      </Span>
    </Logo>
    <Badge>
      <IssueLink id={badgeId} href={ISSUES_LINK}>
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
