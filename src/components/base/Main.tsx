import styled from "styled-components";

export const Main = styled.main`
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg1};
`;
