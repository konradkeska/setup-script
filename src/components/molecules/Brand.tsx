import React from "react";
import Sc from "styled-components";

import { ActionButton } from "components/atoms";

export const Brand = () => (
  <Button disabled>
    <div>S</div>
  </Button>
);

const Button = Sc(ActionButton)`
  background: ${({ theme }) =>
    `linear-gradient(to left, ${theme.colors.primary.purple}, ${theme.colors.primary.blue})`};  //#514A9D, #24C6DC
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
