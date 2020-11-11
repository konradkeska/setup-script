import styled from "styled-components";

type Props = {
  wasUserGuided: boolean;
};

export const Main = styled.main<Props>`
  padding: ${({ wasUserGuided }) =>
    `${wasUserGuided ? 0 : 24}px 24px 24px 24px`};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg1};
  transition: padding 700ms;
`;
