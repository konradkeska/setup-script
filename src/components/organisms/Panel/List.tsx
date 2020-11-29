import Sc from "styled-components";

import { MaterialColor } from "types";

type Props = {
  bgColor: MaterialColor;
  border?: boolean;
  heading?: string;
};

export const List = Sc.ul<Props>`
  margin: 0px;
  padding: 0px;
  overflow-y: auto;
  height: ${({ heading }) => (heading ? "calc(100% - (16px + 15px))" : "100%")};
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
