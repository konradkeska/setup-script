import Axios, { AxiosResponse } from "axios";

import { CaskDetails, FormulaDetails, Soft } from "types";

const BREW_API_HOST = "https://formulae.brew.sh/api/";

const loadCasks = (): Promise<AxiosResponse<Soft[]>> =>
  Axios.get(`${BREW_API_HOST}cask.json`);

const loadFormulas = (): Promise<AxiosResponse<Soft[]>> =>
  Axios.get(`${BREW_API_HOST}formula.json`);

const loadCask = (name: string): Promise<AxiosResponse<CaskDetails>> =>
  Axios.get(`${BREW_API_HOST}cask/${name}.json`);

const loadFormula = (token: string): Promise<AxiosResponse<FormulaDetails>> =>
  Axios.get(`${BREW_API_HOST}formula/${token}.json`);

export { loadCasks, loadFormulas, loadCask, loadFormula };
