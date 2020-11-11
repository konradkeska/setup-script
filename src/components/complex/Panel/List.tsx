import styled, { DefaultColorsMaterial } from "styled-components";

import { PANEL_RECORD_COUNT } from "../../../config";

type Props = {
  bgColor: keyof DefaultColorsMaterial;
};

export const List = styled.ul<Props>`
  margin: 0px;
  padding: 0px;
  min-height: ${`calc(${PANEL_RECORD_COUNT} * 32px + 2px)`};
  max-height: ${`calc(${PANEL_RECORD_COUNT} * 32px + 2px)`};
  background-color: ${({ theme, bgColor }) => theme.colors.material[bgColor]};
  border: 1px solid transparent;
  overflow-y: auto;
  border-radius: 4px;
`;
