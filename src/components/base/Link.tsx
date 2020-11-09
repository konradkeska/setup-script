import styled from "styled-components";

import { Theme } from "../../themes";

export const Link = styled.a<{ theme: Theme }>`
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
