import React from "react";
import Sc from "styled-components";

import { FOOTER_HEIGHT, HEADER_HEIGHT } from "components/config";
import { Wrapper } from "components/atoms";
import { Side } from "components/organisms";
import { FontColors } from "types";

interface ViewProps {
  children: React.ReactNode;
}

export const View = ({ children }: ViewProps) => <>{children}</>;

const HeaderContainer = React.memo(({ children }: ViewProps) => (
  <Header>
    <Wrapper maxW="100%">{children}</Wrapper>
  </Header>
));

const SidesContainer = ({ children }: ViewProps) => <>{children}</>;

interface SideProps extends ViewProps {
  expanded: boolean;
  onClick?: () => void;
}

const Left = React.memo(({ children, expanded, onClick }: SideProps) => (
  <Side expanded={expanded} onClick={onClick} left>
    {children}
  </Side>
));

const Right = React.memo(({ children, expanded, onClick }: SideProps) => (
  <Side expanded={expanded} onClick={onClick} right>
    {children}
  </Side>
));

SidesContainer.Left = Left;
SidesContainer.Right = Right;

const MainContainer = React.memo(({ children }: ViewProps) => (
  <Main>
    <Wrapper align="flex-start" p="18px 0px 0px 0px">
      {children}
    </Wrapper>
  </Main>
));

const FooterContainer = React.memo(({ children }: ViewProps) => (
  <Footer>
    <Wrapper color={FontColors.SUB} p="0px 16px">
      {children}
    </Wrapper>
  </Footer>
));

View.Header = HeaderContainer;
View.Sides = SidesContainer;
View.Main = MainContainer;
View.Footer = FooterContainer;

const Header = Sc.header`
  margin-top: 0px;
  width: 100%;
  padding: ${({ theme }) => `${theme.paddings.xs}px 0px`};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.material.overlay};
  color: ${({ theme }) => theme.colors.font.base};
  transition: margin 500ms;
  backdrop-filter: blur(5px);
  box-shadow: ${({ theme }) => theme.shadows.base};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.material.input}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
`;

const Main = Sc.main`
  padding-top: ${HEADER_HEIGHT}px;
  width: 100%;
  height: calc(100% - ${FOOTER_HEIGHT}px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.material.background};
  transition: padding 500ms;
`;

const Footer = Sc.footer`
  color: ${({ theme }) => theme.colors.font.sub};
  background-color: ${({ theme }) => theme.colors.material.background};
  padding-bottom: ${({ theme }) => `${theme.paddings.xs}px`};
  text-align: right;
  display: flex;
  justify-content: space-between;
`;
