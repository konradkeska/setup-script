import styled from "styled-components";

type Props = {
  wasUserGuided: boolean;
};

export const Main = styled.main<Props>`
  padding-top: ${({ wasUserGuided }) => `${wasUserGuided ? 62 : 62 + 42}px`};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.material.background};
  transition: padding 700ms;
`;
