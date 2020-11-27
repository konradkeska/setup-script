// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultBrandColors {
    lighter: string;
    darker: string;
  }

  export interface DefaultColorsPrimary {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    blue: string;
    purple: string;
    pink: string;
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
    backdrop: string;
  }

  export interface DefaultColors {
    brand: DefaultBrandColors;
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
    header: string;
    footer: string;
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
