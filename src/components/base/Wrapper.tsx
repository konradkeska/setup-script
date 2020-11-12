import styled from "styled-components";

import { MAIN_PANEL_MAX_WIDTH } from "../../utils/config";

type Props = {
  maxW?: string;
  w?: string;
  align?: string;
  justify?: string;
  direction?: string;
  mt?: string;
  color?: string;
  p?: string;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-between"};
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction || "unset"};
  width: ${({ w }) => w || "100%"};
  padding: ${({ theme, p }) => p || `0px ${theme.paddings.sm}px`};
  margin: 0 auto;
  max-width: ${({ maxW }) => maxW || `${MAIN_PANEL_MAX_WIDTH}px`};
  margin-top: ${({ mt }) => mt || "unset"};
  height: 100%;
  transition: margin 700ms;
  color: ${({ theme, color }) => color || theme.colors.font.base};
`;
