import styled from "styled-components";

export const Header = styled.header`
  margin-top: 0px;
  width: 100%;
  padding: ${({ theme }) => `${theme.paddings.xs}px 0px`};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.material.overlay};
  color: ${({ theme }) => theme.colors.font.base};
  transition: margin 700ms;
  backdrop-filter: blur(5px);
  box-shadow: ${({ theme }) => theme.shadows.base};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.material.input}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
`;
