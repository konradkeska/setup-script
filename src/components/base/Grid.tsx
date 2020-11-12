import styled from "styled-components";

import { MAIN_PANEL_MAX_WIDTH } from "../../utils/config";

export const Grid = styled.div<{
  alignItems?: string;
  mt?: string;
  color?: string;
  p?: string;
}>`
  width: 100%;
  padding: ${({ theme, p }) => p || `0px ${theme.paddings.sm}px`};
  margin: 0 auto;
  max-width: ${MAIN_PANEL_MAX_WIDTH}px;
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || "center"};
  margin-top: ${({ mt }) => mt || "unset"};
  flex-wrap: wrap;
  height: 100%;
  transition: margin 700ms;
  color: ${({ theme, color }) => color || theme.colors.font.base};
`;
