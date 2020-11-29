import axios from "axios";

import { Soft, CaskDetails, FormulaDetails, SoftType } from "types";
import { toDetails, toSoftId, toSoftType } from "utils";
import { APP } from "config";

const getCasks = () => axios.get<Soft[]>(`${APP.BREW_API_HOST}cask.json`);

const getFormulas = () => axios.get<Soft[]>(`${APP.BREW_API_HOST}formula.json`);

const getCask = (name: string) =>
  axios.get<CaskDetails>(`${APP.BREW_API_HOST}cask/${name}.json`);

const getFormula = (token: string) =>
  axios.get<FormulaDetails>(`${APP.BREW_API_HOST}formula/${token}.json`);

const loadFormulaDetails = async (identifier: string) => {
  try {
    const { data } = await getFormula(identifier);
    if (data) return toDetails(data);
  } catch (error) {
    console.error(error);
  }
};

const loadCaskDetails = async (identifier: string) => {
  try {
    const { data } = await getCask(identifier);
    if (data) return toDetails(data);
  } catch (error) {
    console.error(error);
  }
};

const loadDetails = async (focusedSoft: Soft | null) => {
  const identifier = focusedSoft ? toSoftId(focusedSoft) : null;
  if (identifier) {
    return toSoftType(focusedSoft) === SoftType.FORMULA
      ? loadFormulaDetails(identifier)
      : loadCaskDetails(identifier);
  }
};

export { getCasks, getFormulas, loadDetails, SoftType };
