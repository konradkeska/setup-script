import { Cask, Formula, IBaseCask, IBaseFormula } from "./types";

function toBaseCask(casks: Cask[]): IBaseCask[] {
  return casks.map(({ token, url, name, version }) => ({
    token,
    url,
    name: typeof name === "string" ? name : name.join(" "),
    version,
    type: "cask",
  }));
}

function toBaseFormula(formulas: Formula[]): IBaseFormula[] {
  return formulas.map(({ token, url, name, version }) => ({
    token,
    url,
    name: typeof name === "string" ? name : name.join(" "),
    version,
    type: "formula",
  }));
}

export { toBaseCask, toBaseFormula };
