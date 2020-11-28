import "styled-components";

import { IColors, IPadding, IRadius, IShadow } from "theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    paddings: IPadding;
    shadows: IShadow;
    radiuses: IRadius;
  }

  export type Themes = {
    light: DefaultTheme;
    dark: DefaultTheme;
  };
}
