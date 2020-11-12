import styled from "styled-components";

type Props = {
  hasShadow: boolean;
  wasUserGuided: boolean;
};

export const Header = styled.header<Props>`
  margin-top: ${({ wasUserGuided }) => (wasUserGuided ? "0px" : "42px")};
  width: 100%;
  padding: ${({ theme }) => `${theme.paddings.md / 2}px 0px`};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.material.overlay};
  color: ${({ theme }) => theme.colors.font.base};
  transition: margin 700ms;
  backdrop-filter: blur(5px);
  box-shadow: ${({ theme, hasShadow }) =>
    hasShadow ? "unset" : theme.shadows.base};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.material.input}`};
  border-top: ${({ wasUserGuided, theme }) =>
    `1px solid ${
      wasUserGuided
        ? theme.colors.material.overlay
        : theme.colors.material.input
    }`};
`;
