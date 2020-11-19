import styled from "styled-components";

import { FOOTER_HEIGHT, HEADER_HEIGHT } from "components/config";

export const Main = styled.main`
  padding-top: ${HEADER_HEIGHT}px;
  width: 100%;
  height: calc(100% - ${FOOTER_HEIGHT}px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.material.background};
  transition: padding 700ms;
`;
