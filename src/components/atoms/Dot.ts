import Sc from "styled-components";

import { PrimaryColor } from "types";

type Props = {
  color?: PrimaryColor;
};

export const Dot = Sc.span<Props>`
  color: ${({ theme, color }) =>
    color ? theme.colors.primary[color] : theme.colors.primary.green};
  font-weight: 900;
  font-size: 40px;
  line-height: 0;
  margin-left: -8.5px;
`;
