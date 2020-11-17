import styled from "styled-components";

type Props = {
  screenHeight: number;
};

export const Wrapper = styled.div<Props>`
  width: 100%;
  padding: ${({ theme }) =>
    `0px ${theme.paddings.sm}px ${theme.paddings.md}px ${theme.paddings.sm}px`};
  height: ${({ screenHeight }) => `${screenHeight - 131}px`};
  overflow-x: auto;
`;
