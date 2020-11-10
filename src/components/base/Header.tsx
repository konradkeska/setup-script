import styled from "styled-components";

export const Header = styled.header<{
  hasShadow: boolean;
  wasUserGuided: boolean;
}>`
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
  box-shadow: ${({ hasShadow }) =>
    hasShadow
      ? "unset"
      : "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"};
`;
