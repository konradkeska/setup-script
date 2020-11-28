import React from "react";
import Sc from "styled-components";

import { FOOTER_HEIGHT, HEADER_HEIGHT } from "components/config";
import { Wrapper } from "components/atoms";
import { Side } from "components/organisms";

interface IViewProps {
  children: React.ReactNode;
}

export const View = ({ children }: IViewProps) => <>{children}</>;

const HeaderContainer = React.memo(({ children }: IViewProps) => (
  <Header>
    <Wrapper maxW="100%">{children}</Wrapper>
  </Header>
));

const SidesContainer = ({ children }: IViewProps) => <>{children}</>;

interface ISideProps extends IViewProps {
  expanded: boolean;
  onClick?: () => void;
}

const Left = React.memo(({ children, expanded, onClick }: ISideProps) => (
  <Side expanded={expanded} onClick={onClick} left>
    {children}
  </Side>
));

const Right = React.memo(({ children, expanded, onClick }: ISideProps) => (
  <Side expanded={expanded} onClick={onClick} right>
    {children}
  </Side>
));

SidesContainer.Left = Left;
SidesContainer.Right = Right;

const MainContainer = React.memo(({ children }: IViewProps) => (
  <Main>
    <Wrapper align="flex-start" p="18px 0px 0px 0px">
      {children}
    </Wrapper>
  </Main>
));

const FooterContainer = React.memo(({ children }: IViewProps) => (
  <Footer>
    <Wrapper maxW="100%">{children}</Wrapper>
  </Footer>
));

View.Header = HeaderContainer;
View.Sides = SidesContainer;
View.Main = MainContainer;
View.Footer = FooterContainer;

const Header = Sc.header`
  margin-top: 0px;
  width: 100%;
  height: 58px;
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

const Main = Sc.main`
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: ${FOOTER_HEIGHT}px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: padding 500ms;
  background-color: ${({ theme }) => theme.colors.material.background};
`;

const Footer = Sc.footer`
  bottom: 0;
  height: ${FOOTER_HEIGHT}px;

  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: margin 500ms;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.colors.material.overlay};
  color: ${({ theme }) => theme.colors.font.base};
  box-shadow: ${({ theme }) => theme.shadows.footer};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.material.input}`};
`;
