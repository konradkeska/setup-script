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

export interface Soft extends Omit<SoftData, "name"> {
  name: string;
}

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

export type RequiredListFields = {
  name: string;
};

export interface ListActionParams<T> {
  list: T[];
  setList: React.Dispatch<React.SetStateAction<T[]>>;
}

export interface AddToListActionParams<T> extends ListActionParams<T> {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
