import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
};

export const Row = React.memo(({ children, ...props }: Props) => (
  <StyledDiv {...props}>{children}</StyledDiv>
));

const StyledDiv = styled.div<{
  display?: string;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: ${({ display }) => display || "flex"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
`;
