import styled, { DefaultColors } from "styled-components";

export const Button = styled.button<{
  small?: boolean;
  bgColor?: keyof DefaultColors;
  ml?: boolean;
}>`
  color: ${({ theme }) => theme.colors.font1};
  margin-left: ${({ ml }) => (ml ? "12px" : "unset")};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.colors[bgColor] : theme.colors.blue};
  padding: ${({ small }) => (small ? "2px 6.66px" : "8px 26px")};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  border: 1px dashed transparent;

  &:focus {
    border: 1px dashed ${({ theme }) => theme.colors.font1};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
