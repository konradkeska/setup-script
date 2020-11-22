import Sc from "styled-components";

import { ActionButton } from "components/atoms";

export const Brand = Sc(ActionButton)`
  font-size: 30px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.material.input};
  color: ${({ theme }) => theme.colors.font.base};
  margin-right: ${({ theme }) => `${theme.paddings.xs}px`};
`;
