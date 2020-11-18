import styled, { DefaultColorsMaterial } from "styled-components";

type Props = {
  bgColor: keyof DefaultColorsMaterial;
  border?: boolean;
  title?: string;
};

export const List = styled.ul<Props>`
  margin: 0px;
  padding: 0px;
  height: ${({ title }) => (title ? "calc(100% - (16px + 15px))" : "100%")};
  background-color: ${({ theme, bgColor }) => theme.colors.material[bgColor]};
  border-radius: ${({ theme }) => `${theme.radiuses.xs}px`};
  border: ${({ border }) => (border ? "1px solid transparent" : "none")};
  overflow-y: auto;
`;
