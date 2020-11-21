import Sc from "styled-components";

export const Link = Sc.a`
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
  }
`;
