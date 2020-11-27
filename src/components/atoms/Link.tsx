import React from "react";
import Sc from "styled-components";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const Link = ({ children, href }: Props) => (
  <Anchor href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Anchor>
);

const Anchor = Sc.a`
  font-weight: 600;
  border: 1px solid transparent;
  &:hover {
    color: ${({ theme }) => theme.colors.brand.lighter};
  }
`;
