import Sc from "styled-components";
import { FixedSizeList, FixedSizeListProps } from "react-window";

import { MaterialColor } from "types";

interface IProps extends FixedSizeListProps {
  id?: string;
  bgColor: MaterialColor;
  border?: boolean;
  heading?: string;
}

export const List = Sc(FixedSizeList)<IProps>`
  margin: 0px;
  padding: 0px;
  background-color: ${({ theme, bgColor }) => theme.colors.material[bgColor]};
  border: ${({ border }) => (border ? "1px solid transparent" : "none")};

  ${({ theme, heading }) => {
    if (heading) {
      return `
        border-bottom-left-radius: ${theme.radiuses.xs}px;
        border-bottom-right-radius: ${theme.radiuses.xs}px;
      `;
    } else {
      return `
        border-radius: ${theme.radiuses.xs}px;
      `;
    }
  }}
`;
