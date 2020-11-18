import styled from "styled-components";

import { PrimaryColors } from "types";

type Props = {
  color?: PrimaryColors;
};

export const Dot = styled.span<Props>`
  color: ${({ theme, color }) =>
    color ? theme.colors.primary[color] : theme.colors.primary.purple};
  font-weight: 900;
  font-size: 40px;
  line-height: 0;
  margin-left: -8.5px;
`;
