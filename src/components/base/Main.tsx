import styled from "styled-components";

import { Theme } from "../../themes";

export const Main = styled.main<{ theme: Theme }>`
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg1};
`;
