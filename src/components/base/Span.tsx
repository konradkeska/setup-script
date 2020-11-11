import styled, { DefaultTheme } from "styled-components";
import {
  FontColors,
  MaterialColors,
  PrimaryColors,
} from "../../hooks/useTheme";

type Props = {
  color?: PrimaryColors | FontColors;
  bgColor?: PrimaryColors | MaterialColors;
  radius?: string;
  p?: boolean;
  ml?: boolean;
  size?: string;
  h?: string;
  clickable?: boolean;
  selectable?: boolean;
};

export const Span = styled.span<Props>`
  color: ${({ color, theme }) =>
    color ? getColorValue(color, theme) : "inherit"};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? getColorValue(bgColor, theme) : "unset"};
  border-radius: ${(props) => props.radius || "unset"};
  margin-left: ${(props) => (props.ml ? "12px" : "unset")};
  padding: ${(props) => (props.p ? "6px" : "unset")};
  font-size: ${(props) => props.size || "inherit"};
  height: ${(props) => props.h || "auto"};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: ${(props) => (props.clickable ? "pointer" : "unset")};
    user-select: ${(props) => (props.selectable ? "unset" : "none")};
  }
`;

const getColorValue = (
  key: PrimaryColors | FontColors | MaterialColors,
  theme: DefaultTheme
) => {
  if (isOfTypePrimaryColors(key)) return theme.colors.primary[key];
  if (isOfTypeMaterialColors(key)) return theme.colors.material[key];
  if (isOfTypeFontColors(key)) return theme.colors.font[key];
  return "unset";
};

const isOfTypePrimaryColors = (keyInput: string): keyInput is PrimaryColors =>
  Object.values(PrimaryColors).includes(keyInput as PrimaryColors);

const isOfTypeMaterialColors = (keyInput: string): keyInput is MaterialColors =>
  Object.values(MaterialColors).includes(keyInput as MaterialColors);

const isOfTypeFontColors = (keyInput: string): keyInput is FontColors =>
  Object.values(FontColors).includes(keyInput as FontColors);
