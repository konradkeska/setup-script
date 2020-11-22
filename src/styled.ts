// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultColorsPrimary {
    purple: string;
    blue: string;
    green: string;
    red: string;
  }

  export interface DefaultColorsFont {
    base: string;
    sub: string;
  }

  export interface DefaultColorsMaterial {
    input: string;
    side: string;
    overlay: string;
    background: string;
  }

  export interface DefaultColors {
    primary: DefaultColorsPrimary;
    font: DefaultColorsFont;
    material: DefaultColorsMaterial;
  }

  export interface DefaultPaddings {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }

  export interface DefaultShadows {
    base: string;
  }

  export interface DefaultRadiuses {
    xs: number;
    sm: number;
    md: number;
  }

  export type Themes = {
    light: DefaultTheme;
    dark: DefaultTheme;
  };

  export interface DefaultTheme {
    colors: DefaultColors;
    paddings: DefaultPaddings;
    shadows: DefaultShadows;
    radiuses: DefaultRadiuses;
  }
}
