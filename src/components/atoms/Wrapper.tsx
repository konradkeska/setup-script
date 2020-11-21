import Sc from "styled-components";

import { MAIN_MAX_WIDTH } from "components/config";
import { toColorString } from "utils";
import { FontColors } from "types";

type Props = {
  maxW?: string;
  w?: string;
  align?: string;
  justify?: string;
  direction?: string;
  mt?: string;
  color?: FontColors;
  p?: string;
};

export const Wrapper = Sc.div<Props>`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-between"};
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction || "unset"};
  width: ${({ w }) => w || "100%"};
  padding: ${({ theme, p }) => p || `0px ${theme.paddings.sm}px`};
  margin: 0 auto;
  max-width: ${({ maxW }) => maxW || `${MAIN_MAX_WIDTH}px`};
  margin-top: ${({ mt }) => mt || "unset"};
  height: 100%;
  transition: margin 500ms;
  color: ${({ theme, color }) =>
    color ? toColorString(color, theme) : theme.colors.font.base};
`;
