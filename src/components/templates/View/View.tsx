import React from "react";
import { DefaultTheme } from "styled-components";

import { Footer } from "./Footer";
import { Global } from "./Global";
import { Header } from "./Header";
import { Main } from "./Main";
import { Sides } from "./Sides";

interface IViewProps {
  theme: DefaultTheme;
  children: React.ReactNode;
}

export const View = ({ theme, children }: IViewProps) => (
  <Global theme={theme}>{children}</Global>
);

View.Footer = Footer;
View.Header = Header;
View.Main = Main;
View.Sides = Sides;
