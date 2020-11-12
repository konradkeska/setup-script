import axios, { AxiosResponse } from "axios";

import { Setting, Soft } from "../types";

import settingsData from "../data/settings.json";

const BREW_HOST = "https://formulae.brew.sh/";

async function loadCasks(): Promise<AxiosResponse<Soft[]>> {
  return axios.get(`${BREW_HOST}api/cask.json`);
}

async function loadFormulas(): Promise<AxiosResponse<Soft[]>> {
  return axios.get(`${BREW_HOST}api/formula.json`);
}

function loadSettings(): Setting[] {
  return settingsData;
}

export { loadCasks, loadFormulas, loadSettings };
