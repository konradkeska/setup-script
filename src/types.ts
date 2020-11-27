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

export enum BrandColors {
  LIGHTER = "lighter",
  DARKER = "darker",
}

export enum PrimaryColors {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  TEAL = "teal",
  BLUE = "blue",
  PURPLE = "purple",
  PINK = "pink",
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
  BACKDROP = "backdrop",
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

export type Details = {
  name: string;
  desc: string;
  homepage: string;
  installs: number;
  version: string;
  conflicts: number;
};

export interface CaskDetails {
  token: string;
  name: string[];
  desc: string;
  homepage: string;
  url: string;
  appcast?: any;
  version: string;
  sha256: string;
  artifacts: (string[] | Artifacts2 | string)[];
  caveats: string;
  depends_on: Dependson;
  conflicts_with?: string[];
  container?: any;
  auto_updates?: any;
  analytics: Analytics;
  generated_date: string;
}

export interface FormulaDetails {
  name: string;
  full_name: string;
  oldname?: string;
  aliases: string[];
  versioned_formulae: string[];
  desc: string;
  license: string;
  homepage: string;
  versions: Versions;
  urls: Urls;
  revision: number;
  version_scheme: number;
  bottle: Bottle;
  keg_only: boolean;
  bottle_disabled: boolean;
  options: string[];
  build_dependencies: string[];
  dependencies: string[];
  recommended_dependencies: string[];
  optional_dependencies: string[];
  uses_from_macos: string[];
  requirements: string[];
  conflicts_with: string[];
  caveats?: string;
  installed: Installed[];
  linked_keg: string;
  pinned: boolean;
  outdated: boolean;
  deprecated: boolean;
  disabled: boolean;
  analytics: Analytics;
  generated_date: string;
}

interface Analytics {
  install: Install;
}

interface Install {
  "30d": Days;
  "90d": Days;
  "365d": Days;
}

type Days = Record<string, number>;

interface Artifacts2 {
  delete: string;
  signal: Signal;
}

interface Signal {}

interface Installed {
  version: string;
  used_options: any[];
  built_as_bottle: boolean;
  poured_from_bottle: boolean;
  runtime_dependencies: Runtimedependency[];
  installed_as_dependency: boolean;
  installed_on_request: boolean;
}

interface Runtimedependency {
  full_name: string;
  version: string;
}

interface Bottle {
  stable: Stable2;
}

interface Stable2 {
  rebuild: number;
  cellar: string;
  prefix: string;
  root_url: string;
  files: Files;
}

interface Files {
  big_sur: Bigsur;
  catalina: Bigsur;
  mojave: Bigsur;
  high_sierra: Bigsur;
}

interface Bigsur {
  url: string;
  sha256: string;
}

interface Urls {
  stable: Stable;
}

interface Stable {
  url: string;
  tag?: any;
  revision?: any;
}

interface Versions {
  stable: string;
  head: string;
  bottle: boolean;
}
