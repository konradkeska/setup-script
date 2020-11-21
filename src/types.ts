export interface Base extends Preset, Soft {
  name: string;
  token?: string;
  type?: SoftType;
  version?: string;
}

export interface Preset {
  name: string;
  casks?: string[];
  formulas?: string[];
}

export interface Soft {
  artifacts?: string[];
  depends_on?: Dependson;
  homepage?: string;
  name: string;
  sha256?: string;
  token?: string;
  type?: SoftType;
  url?: string;
  version?: string;
  appcast?: string;
  auto_updates?: boolean;
  caveats?: string;
  conflicts_with?: Conflictswith;
  container?: string;
  desc?: string;
}

type Dependson = {
  macos?: Macos;
  cask?: string[];
};

type Macos = {
  ">=": string[];
};

type Conflictswith = {
  cask: string[];
};

export type SoftApiResponse = Omit<Soft, "name" | "type"> & {
  name: string | string[];
};

export enum SoftType {
  CASK = "cask",
  FORMULA = "formula",
}

export enum PrimaryColors {
  PURPLE = "purple",
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
}

export enum FontColors {
  BASE = "base",
  SUB = "sub",
}

export enum MaterialColors {
  INPUT = "input",
  SIDE = "side",
  OVERLAY = "overlay",
  BACKGROUND = "background",
}

export enum Paddings {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum Shadows {
  BASE = "base",
}

export enum Radiuses {
  PANEL = "panel",
  BUTTON = "button",
  INPUT = "input",
}

export enum Action {
  ADD = "add",
  REMOVE = "remove",
}

export enum DisplayMode {
  PICKER = "picker",
  SCRIPT = "script",
}

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}
