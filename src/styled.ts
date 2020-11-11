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
    overlay: string;
    background: string;
  }

  export interface DefaultColors {
    primary: DefaultColorsPrimary;
    font: DefaultColorsFont;
    material: DefaultColorsMaterial;
  }

  export interface DefaultPaddings {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }

  export interface DefaultShadows {
    base: string;
  }

  export type Themes = {
    light: DefaultTheme;
    dark: DefaultTheme;
  };

  export type Mode = keyof Themes;

  export interface DefaultTheme {
    colors: DefaultColors;
    paddings: DefaultPaddings;
    shadows: DefaultShadows;
  }
}
