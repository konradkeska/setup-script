import styled, { DefaultColorsMaterial } from "styled-components";

type Props = {
  count: number;
  bgColor: keyof DefaultColorsMaterial;
  border?: boolean;
};

export const List = styled.ul<Props>`
  margin: 0px;
  padding: 0px;
  min-height: ${({ count }) => `calc(${count} * 32px + 2px)`};
  max-height: ${({ count }) => `calc(${count} * 32px + 2px)`};
  background-color: ${({ theme, bgColor }) => theme.colors.material[bgColor]};
  border-radius: ${({ theme }) => `${theme.radiuses.xs}px`};
  border: ${({ border }) => (border ? "1px solid transparent" : "none")};
  overflow-y: auto;
`;
