import React from "react";

import { Footer, Header, Main, Wrapper } from "components/atoms";
import { Side } from "components/organisms";
import { FontColors } from "types";

interface ViewProps {
  children: React.ReactNode;
}

interface SideProps extends ViewProps {
  expanded: boolean;
  onClick?: () => void;
}

const View = ({ children }: ViewProps) => <>{children}</>;

const HeaderContainer = React.memo(({ children }: ViewProps) => (
  <Header>
    <Wrapper maxW="100%">{children}</Wrapper>
  </Header>
));

const SidesContainer = ({ children }: ViewProps) => <>{children}</>;

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

export { View };
