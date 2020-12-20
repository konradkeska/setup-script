import React from "react";
import Sc from "styled-components";

type Props = {
  children: React.ReactNode;
  href: string;
  withoutMargin?: boolean;
};

export const Link = ({ children, href, withoutMargin = false }: Props) => (
  <Anchor
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    withoutMargin={withoutMargin}
  >
    {children}
  </Anchor>
);

const Anchor = Sc.a<Pick<Props, "withoutMargin">>`
  margin: ${({ withoutMargin }) => (withoutMargin ? "none" : "0 0.33rem")};
  font-weight: 600;
  border: 1px solid transparent;
  &:hover {
    color: ${({ theme }) => theme.colors.brand.lighter};
  }
`;
