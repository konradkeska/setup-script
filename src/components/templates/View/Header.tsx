import React from "react";
import Sc from "styled-components";

import { Wrapper } from "components/atoms";

interface IProps {
  children: React.ReactNode;
}

export const Header = React.memo(({ children }: IProps) => (
  <Container>
    <Wrapper maxW="100%">{children}</Wrapper>
  </Container>
));

const Container = Sc.header`
  height: 58px;
  width: 100%;
  margin-top: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: margin 500ms;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.colors.material.overlay};
  color: ${({ theme }) => theme.colors.font.base};
  box-shadow: ${({ theme }) => theme.shadows.header};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.material.input}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
`;
