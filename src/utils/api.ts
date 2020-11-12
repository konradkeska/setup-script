import axios, { AxiosResponse } from "axios";

import { Setting, SoftData } from "../types";

import settingsData from "../data/settings.json";

const BREW_HOST = "https://formulae.brew.sh/";

async function loadBrewCasks(): Promise<AxiosResponse<SoftData[]>> {
  return axios.get(`${BREW_HOST}api/cask.json`);
}

async function loadBrewFormulas(): Promise<AxiosResponse<SoftData[]>> {
  return axios.get(`${BREW_HOST}api/formula.json`);
}

function loadSettings(): Setting[] {
  return settingsData;
}

async function loadBrewData(): Promise<
  [AxiosResponse<SoftData[]>, AxiosResponse<SoftData[]>]
> {
  return Promise.all([loadBrewCasks(), loadBrewFormulas()]);
}

export { loadBrewData, loadSettings };
