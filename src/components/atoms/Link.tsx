import React from "react";
import Sc from "styled-components";

type Props = {
  label: string;
  href: string;
};

export const Link = ({ label, href }: Props) => (
  <Anchor href={href} target="_blank" rel="noopener noreferrer">
    {label}
  </Anchor>
);

const Anchor = Sc.a`
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.purple};
  }
`;
