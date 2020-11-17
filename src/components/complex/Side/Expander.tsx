import React from "react";
import styled from "styled-components";

import { Icon } from "../../base";

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 30px;
  z-index: 4;
`;

const LeftWrapper = styled(Wrapper)`
  margin-top: 20vh;
`;

const RightWrapper = styled(Wrapper)`
  margin-top: 60vh;
`;

const Button = styled.button`
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

const LeftButton = styled(Button)`
  margin-left: -1px;
  border-top-right-radius: 33%;
  border-bottom-right-radius: 33%;
  border-right: 1px solid ${({ theme }) => theme.colors.material.background};
`;

const RightButton = styled(Button)`
  margin-right: -1px;
  border-top-left-radius: 33%;
  border-bottom-left-radius: 33%;
  border-left: 1px solid ${({ theme }) => theme.colors.material.background};
`;
