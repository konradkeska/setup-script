import { useCallback } from "react";
import Axios, { AxiosResponse } from "axios";

import { Soft, SoftType } from "../types";

import { useList } from "./useList";

const BREW_HOST = "https://formulae.brew.sh/";

async function loadCasks(): Promise<AxiosResponse<Soft[]>> {
  return Axios.get(`${BREW_HOST}api/cask.json`);
}

async function loadFormulas(): Promise<AxiosResponse<Soft[]>> {
  return Axios.get(`${BREW_HOST}api/formula.json`);
}

export function useBrewSoft() {
  const [casks, addedCasks, addCask, removeCask] = useList({
    loader: loadCasks,
    type: SoftType.CASK,
  });

  const [formulas, addedFormulas, addFormula, removeFormula] = useList({
    loader: loadFormulas,
    type: SoftType.FORMULA,
  });

  const onAdd = useCallback(
    (record: Soft) =>
      ({
        [SoftType.CASK]: addCask,
        [SoftType.FORMULA]: addFormula,
      }[record.type](record)),
    [addCask, addFormula]
  );

  const onRemove = useCallback(
    (record: Soft) =>
      ({
        [SoftType.CASK]: removeCask,
        [SoftType.FORMULA]: removeFormula,
      }[record.type](record)),
    [removeCask, removeFormula]
  );

  return {
    casks,
    addedCasks,
    formulas,
    addedFormulas,
    onAdd,
    onRemove,
  };
}
