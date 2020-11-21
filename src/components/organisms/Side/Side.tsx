import React from "react";
import Sc from "styled-components";

import { Expander } from "./Expander";
import { Wrapper } from "./Wrapper";

type Props = {
  children: React.ReactNode;
  expanded: boolean;
  onClick?: () => void;
  left?: boolean;
  right?: boolean;
  screenWidth?: number;
};

export const Side = React.memo(
  ({ children, expanded, onClick, left, right, screenWidth }: Props) => (
    <Wrapper
      expanded={expanded}
      left={left}
      right={right}
      screenWidth={screenWidth}
    >
      {right && (
        <Expander onClick={onClick} pointed="right" expanded={expanded} />
      )}
      <Content left={left} right={right}>
        {children}
      </Content>
      {left && (
        <Expander onClick={onClick} pointed="left" expanded={expanded} />
      )}
    </Wrapper>
  )
);

const Content = Sc.div<Pick<Props, "left" | "right">>`
  width: calc(100% - 20px);
  background-color: ${({ theme }) => theme.colors.material.side};
  ${({ left, right, theme }) => {
    if (left)
      return `border-right: 1px solid ${theme.colors.material.background}`;
    if (right)
      return `border-left: 1px solid ${theme.colors.material.background}`;
  }}
`;
