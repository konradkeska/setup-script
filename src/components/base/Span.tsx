import styled, { DefaultColors } from "styled-components";

type Props = {
  color?: keyof DefaultColors;
  bgColor?: keyof DefaultColors;
  radius?: string;
  p?: boolean;
  ml?: boolean;
  size?: string;
  h?: string;
  clickable?: boolean;
  selectable?: boolean;
};

export const Span = styled.span<Props>`
  color: ${({ color, theme }) => (color ? theme.colors[color] : "inherit")};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme.colors[bgColor] : "unset"};
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
