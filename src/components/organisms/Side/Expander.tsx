import React from "react";
import Sc from "styled-components";

import { Icon } from "components/atoms";

type Props = {
  expanded: boolean;
  pointed: "left" | "right";
  onClick?: () => void;
};

export const Expander = React.memo(({ onClick, pointed, expanded }: Props) =>
  pointed === "left" ? (
    <LeftWrapper>
      <LeftButton onClick={onClick}>
        {expanded ? <Icon name="arrow-left" /> : <Icon name="arrow-right" />}
      </LeftButton>
    </LeftWrapper>
  ) : (
    <RightWrapper>
      <RightButton onClick={onClick}>
        {expanded ? <Icon name="arrow-right" /> : <Icon name="arrow-left" />}
      </RightButton>
    </RightWrapper>
  )
);

const Wrapper = Sc.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 30px;
  z-index: 4;
`;

const LeftWrapper = Sc(Wrapper)`
  margin-top: 30%;
`;

const RightWrapper = Sc(Wrapper)`
  margin-top: 60%;
`;

const Button = Sc.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 90px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.font.base};
  background-color: ${({ theme }) => theme.colors.material.side};
  border-top: 1px solid ${({ theme }) => theme.colors.material.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.material.background};

  &:hover,
  &:active,
  &:focus {
    svg {
      fill: ${({ theme }) => theme.colors.font.base};
    }
  }
`;

const LeftButton = Sc(Button)`
  margin-left: -1px;
  border-top-right-radius: 33%;
  border-bottom-right-radius: 33%;
  border-right: 1px solid ${({ theme }) => theme.colors.material.background};
`;

const RightButton = Sc(Button)`
  margin-right: -1px;
  border-top-left-radius: 33%;
  border-bottom-left-radius: 33%;
  border-left: 1px solid ${({ theme }) => theme.colors.material.background};
`;
