import Sc from "styled-components";

import { FontColor, MaterialColor, PrimaryColor } from "types";
import { toColorString } from "utils";

type Props = {
  color?: PrimaryColor | FontColor;
  bgColor?: PrimaryColor | MaterialColor;
  radius?: string;
  p?: boolean;
  ml?: boolean;
  size?: string;
  h?: string;
  clickable?: boolean;
  selectable?: boolean;
};

export const Span = Sc.span<Props>`
  color: ${({ color, theme }) =>
    color ? toColorString(color, theme) : "inherit"};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? toColorString(bgColor, theme) : "unset"};
  border-radius: ${({ radius }) => radius || "unset"};
  margin-left: ${({ ml }) => (ml ? "12px" : "unset")};
  padding: ${({ p }) => (p ? "6px" : "unset")};
  font-size: ${({ size }) => size || "inherit"};
  height: ${({ h }) => h || "auto"};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: ${({ clickable }) => (clickable ? "pointer" : "unset")};
    user-select: ${({ selectable }) => (selectable ? "unset" : "none")};
  }
`;
