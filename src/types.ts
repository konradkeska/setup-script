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
