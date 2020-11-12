export type BaseFields = {
  name: string;
  token: string;
};

export interface Setting extends BaseFields {
  type: string;
  value: boolean | number;
}

export type Filterable = keyof BaseFields;

export type Soft = Omit<SoftData, Filterable> & BaseFields;

export type SoftData = {
  token: string;
  desc?: string;
  homepage: string;
  url: string;
  name: string[];
  appcast?: string;
  version: string;
  sha256: string;
  artifacts: string[];
  caveats?: string;
  depends_on: Dependson;
  conflicts_with?: Conflictswith;
  container?: string;
  auto_updates?: boolean;
};

type Conflictswith = {
  cask: string[];
};

type Dependson = {
  macos?: Macos;
  cask?: string[];
};

type Macos = {
  ">=": string[];
};

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

export const Colors = {
  PRIMARY: PrimaryColors,
  FONT: FontColors,
  MATERIAL: MaterialColors,
};

export const Theme = {
  COLORS: Colors,
  PADDINGS: Paddings,
  SHADOWS: Shadows,
  RADIUSES: Radiuses,
};
