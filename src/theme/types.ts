export enum Action {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export enum BrandColor {
  LIGHTER = "lighter",
  DARKER = "darker",
}

export enum ActionColor {
  INFO = "info",
  INFO_BG = "infoBg",
  SUCCESS = "success",
  SUCCESS_BG = "successBg",
  ERROR = "error",
  ERROR_BG = "errorBg",
  WARNING = "warning",
  WARNING_BG = "warningBg",
}

export enum PrimaryColor {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  TEAL = "teal",
  BLUE = "blue",
  PURPLE = "purple",
  PINK = "pink",
}

export enum FontColor {
  BASE = "base",
  SUB = "sub",
}

export enum MaterialColor {
  INPUT = "input",
  SIDE = "side",
  OVERLAY = "overlay",
  BACKGROUND = "background",
  BACKDROP = "backdrop",
}

export enum Padding {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum Shadow {
  HEADER = "header",
  FOOTER = "footer",
}

export enum Radius {
  XS = "xs",
  SM = "sm",
  MD = "md",
}

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export interface IActionColor extends Record<ActionColor, string> {}
export interface IBrandColor extends Record<BrandColor, string> {}
export interface IPrimaryColor extends Record<PrimaryColor, string> {}
export interface IFontColor extends Record<FontColor, string> {}
export interface IMaterialColor extends Record<MaterialColor, string> {}
export interface IPadding extends Record<Padding, number> {}
export interface IShadow extends Record<Shadow, string> {}
export interface IRadius extends Record<Radius, number> {}
export interface IColors {
  action: IActionColor;
  brand: IBrandColor;
  primary: IPrimaryColor;
  font: IFontColor;
  material: IMaterialColor;
}
