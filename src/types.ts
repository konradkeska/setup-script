export interface IBaseCask extends BaseParams {
  type: "cask";
}

export interface IBaseFormula extends BaseParams {
  type: "formula";
}

export type BaseProperties = "token" | "url" | "version";

export type BaseParams = { name: string } & Pick<
  Cask | Formula,
  BaseProperties
>;

export type Setting = {
  name: string;
  cmd: string;
  type: string;
  value: boolean | number;
};

export type Cask = {
  token: string;
  name: string[];
  desc?: string;
  homepage: string;
  url: string;
  appcast?: string;
  version: string;
  sha256: string;
  artifacts: string[];
  caveats?: string;
  depends_on: Dependson;
  conflicts_with?: Conflictswith;
  container?: any;
  auto_updates?: boolean;
};

export type Formula = {
  token: string;
  name: string[];
  desc?: string;
  homepage: string;
  url: string;
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
