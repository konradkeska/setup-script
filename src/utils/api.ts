import axios, { AxiosResponse } from "axios";

import { Soft } from "../types";

const BREW_HOST = "https://formulae.brew.sh/";

async function loadCasks(): Promise<AxiosResponse<Soft[]>> {
  return axios.get(`${BREW_HOST}api/cask.json`);
}

async function loadFormulas(): Promise<AxiosResponse<Soft[]>> {
  return axios.get(`${BREW_HOST}api/formula.json`);
}

export { loadCasks, loadFormulas };
