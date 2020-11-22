import Sc from "styled-components";

import { PrimaryColors } from "types";

type Props = {
  color?: PrimaryColors;
};

export const Dot = Sc.span<Props>`
  color: ${({ theme, color }) =>
    color ? theme.colors.primary[color] : theme.colors.primary.green};
  font-weight: 900;
  font-size: 40px;
  line-height: 0;
  margin-left: -8.5px;
`;
