import styled from "styled-components";

export const Main = styled.main`
  padding-top: 54px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.material.background};
  transition: padding 700ms;
`;
