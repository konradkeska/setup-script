import styled from "styled-components";

type Props = {
  hasShadow: boolean;
  wasUserGuided: boolean;
};

export const Header = styled.header<Props>`
  margin-top: ${({ wasUserGuided }) => (wasUserGuided ? "0px" : "46px")};
  width: 100%;
  padding: 12px 24px;
  position: fixed;
  display: flex;
  justify-content: centerr;
  align-items: center;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.bg2};
  color: ${({ theme }) => theme.colors.font1};
  transition: margin 700ms;
  backdrop-filter: blur(5px);
  box-shadow: ${({ theme, hasShadow }) =>
    hasShadow ? "unset" : theme.shadows.searchPanel};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.bg3}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.bg3}`};
`;
