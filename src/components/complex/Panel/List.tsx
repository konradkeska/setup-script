import styled, { DefaultColorsMaterial } from "styled-components";

import { PANEL_RECORD_COUNT } from "../../../utils/config";

type Props = {
  bgColor: keyof DefaultColorsMaterial;
};

export const List = styled.ul<Props>`
  margin: 0px;
  padding: 0px;
  min-height: ${`calc(${PANEL_RECORD_COUNT} * 32px + 2px)`};
  max-height: ${`calc(${PANEL_RECORD_COUNT} * 32px + 2px)`};
  background-color: ${({ theme, bgColor }) => theme.colors.material[bgColor]};
  border-radius: ${({ theme }) => `${theme.radiuses.xs}px`};
  border: 1px solid transparent;
  overflow-y: auto;
`;
