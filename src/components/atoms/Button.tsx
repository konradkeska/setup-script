import Sc from "styled-components";

import { PrimaryColors } from "types";

export const Button = Sc.button<{
  small?: boolean;
  bgColor?: PrimaryColors;
  ml?: boolean;
  disabled?: boolean;
}>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.font.sub : theme.colors.font.base};
  margin-left: ${({ ml }) => (ml ? "12px" : "unset")};
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled
      ? theme.colors.material.input
      : bgColor
      ? theme.colors.primary[bgColor]
      : theme.colors.primary.green};
  padding: ${({ theme, small }) =>
    small
      ? `${theme.paddings.xs / 2}px ${(theme.paddings.xs / 2) * 3.25}px`
      : `${theme.paddings.xs}px ${theme.paddings.xs * 3.25}px`};
  border-radius: ${({ theme }) => `${theme.radiuses.md}px`};
  font-size: ${({ small }) => (small ? "14px" : "16px")};
  font-weight: 700;
  border: 1px dashed transparent;

  &:focus {
    border: 1px dashed ${({ theme }) => theme.colors.font.base};
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 1 : 0.9)};
  }
`;
