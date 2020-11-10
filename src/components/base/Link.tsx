import styled from "styled-components";

export const Link = styled.a`
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
