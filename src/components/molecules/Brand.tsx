import React from "react";
import Sc from "styled-components";

import { Button, Icon } from "components/atoms";

type Props = {
  query: string;
  onQueryReset: () => void;
};

export const Brand = ({ query, onQueryReset }: Props) =>
  query ? (
    <Button aria-label="reset search" onClick={onQueryReset} mr>
      <Icon name="arrow-left" />
    </Button>
  ) : (
    <Logo id="brand" disabled>
      <div>S</div>
    </Logo>
  );

const Logo = Sc(Button)`
  background: ${({ theme }) =>
    `linear-gradient(to left, ${theme.colors.brand.lighter}, ${theme.colors.brand.darker})`};
  border-radius:6px;
  margin-right: ${({ theme }) => `${theme.paddings.xs}px`};
  position: relative;

  &:focus {
    border: none;
  }

  &:hover {
    cursor: default;
  }

  div {
    font-size: 40px;
    font-weight: 700;
    transform: rotate(25deg);
    margin-left: 1px;
    margin-bottom: 1px;
    color: ${({ theme }) => theme.colors.material.overlay};
  }
`;
