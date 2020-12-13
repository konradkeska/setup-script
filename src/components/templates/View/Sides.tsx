import React from "react";

import { Side } from "components/organisms";

interface IProps {
  children: React.ReactNode;
}

interface ISideProps extends IProps {
  children: React.ReactNode;
  expanded: boolean;
  id?: string;
  onClick?: () => void;
}

export const Sides = ({ children }: IProps) => <>{children}</>;

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

Sides.Left = Left;
Sides.Right = Right;
