export enum SoftType {
  CASK = "cask",
  FORMULA = "formula",
}

export type Soft = {
  artifacts?: string[];
  depends_on?: Dependson;
  homepage?: string | string[];
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
};

export type SoftApiResponse = Omit<Soft, "name" | "type"> & {
  name: string | string[];
};

export type Details = {
  name: string;
  desc: string;
  homepage: string;
  installs: number;
  version: string;
  conflicts: number;
};

export type Bundle = {
  name: string;
  casks?: string[];
  formulas?: string[];
};

export type CaskDetails = {
  token: string;
  name: string[];
  desc: string;
  homepage: string;
  url: string;
  appcast?: string;
  version: string;
  sha256: string;
  artifacts: (string[] | Artifacts2 | string)[];
  caveats: string;
  depends_on: Dependson;
  conflicts_with?: string[];
  container?: string;
  auto_updates?: boolean;
  analytics: Analytics;
  generated_date: string;
};

export type FormulaDetails = {
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
};

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

type Analytics = {
  install: Install;
};

type Install = {
  "30d": Days;
  "90d": Days;
  "365d": Days;
};

type Days = Record<string, number>;

type Artifacts2 = {
  delete: string;
  signal: Signal;
};

type Signal = {};

type Installed = {
  version: string;
  used_options: string[];
  built_as_bottle: boolean;
  poured_from_bottle: boolean;
  runtime_dependencies: Runtimedependency[];
  installed_as_dependency: boolean;
  installed_on_request: boolean;
};

type Runtimedependency = {
  full_name: string;
  version: string;
};

type Bottle = {
  stable: Stable2;
};

type Stable2 = {
  rebuild: number;
  cellar: string;
  prefix: string;
  root_url: string;
  files: Files;
};

type Files = {
  big_sur: Bigsur;
  catalina: Bigsur;
  mojave: Bigsur;
  high_sierra: Bigsur;
};

type Bigsur = {
  url: string;
  sha256: string;
};

type Urls = {
  stable: Stable;
};

type Stable = {
  url: string;
  tag?: string;
  revision?: string;
};

type Versions = {
  stable: string;
  head: string;
  bottle: boolean;
};
