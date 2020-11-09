import axios, { AxiosResponse } from "axios";

import { Cask, Formula } from "./types";

export const BREW_HOST = "https://formulae.brew.sh/";

async function loadBrewCasks(): Promise<AxiosResponse<Cask[]>> {
  return axios.get(`${BREW_HOST}api/cask.json`);
}

async function loadBrewFormulas(): Promise<AxiosResponse<Formula[]>> {
  return axios.get(`${BREW_HOST}api/formula.json`);
}

async function loadBrewData(): Promise<
  [AxiosResponse<Cask[]>, AxiosResponse<Formula[]>]
> {
  return Promise.all([loadBrewCasks(), loadBrewFormulas()]);
}

export { loadBrewData };
