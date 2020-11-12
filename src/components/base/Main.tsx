import styled from "styled-components";

type Props = {
  wasUserGuided: boolean;
};

export const Main = styled.main<Props>`
  padding: ${({ theme: { paddings }, wasUserGuided }) =>
    `${wasUserGuided ? 0 : paddings.md}px ${paddings.md / 2}px ${
      paddings.md
    }px ${paddings.md / 2}px`};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.material.background};
  transition: padding 700ms;
`;
