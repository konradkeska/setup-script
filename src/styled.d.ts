// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultColors {
    purple: string;
    blue: string;
    green: string;
    red: string;
    font1: string;
    font2: string;
    bg1: string;
    bg2: string;
    bg3: string;
  }

  export interface DefaultPaddings {
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  }

  export interface DefaultShadows {
    searchPanel: string;
  }

  export interface DefaultTheme {
    colors: DefaultColors;
    paddings: DefaultPaddings;
    shadows: DefaultShadows;
  }
}
