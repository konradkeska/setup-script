import styled from "styled-components";

type Props = {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
};

export const Row = styled.div<Props>`
  display: ${({ display }) => display || "flex"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
`;
