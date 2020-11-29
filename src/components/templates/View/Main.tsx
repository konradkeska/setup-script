import React from "react";
import Sc from "styled-components";

import { Wrapper } from "components/atoms";
import { APP } from "config";

interface IViewProps {
  children: React.ReactNode;
}

export const Main = React.memo(({ children }: IViewProps) => (
  <Container>
    <Wrapper align="flex-start" p="18px 0px 0px 0px">
      {children}
    </Wrapper>
  </Container>
));

const Container = Sc.main`
  height: 100%;
  width: 100%;
  padding-top: ${APP.HEADER_HEIGHT}px;
  padding-bottom: ${APP.FOOTER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: padding 500ms;
  background-color: ${({ theme }) => theme.colors.material.background};
`;
