import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) =>
    `0px ${theme.paddings.sm}px ${theme.paddings.md}px ${theme.paddings.sm}px`};
  overflow-x: auto;
`;
