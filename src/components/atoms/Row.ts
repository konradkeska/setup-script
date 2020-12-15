import Sc from "styled-components";

type Props = {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  w?: string;
};

export const Row = Sc.div<Props>`
  width: ${({ w }) => w || "100%"};
  display: ${({ display }) => display || "flex"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
`;
