import { useCallback } from "react";
import Axios, { AxiosResponse } from "axios";

import { Soft, SoftType } from "../types";
import { useList } from "./useList";

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
      getCallbackMap([addCask, addFormula])[record.type || SoftType.CASK](
        record
      ),
    [addCask, addFormula]
  );

  const onRemove = useCallback(
    (record: Soft) =>
      getCallbackMap([removeCask, removeFormula])[record.type || SoftType.CASK](
        record
      ),
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

const BREW_HOST = "https://formulae.brew.sh/";

const loadCasks = (): Promise<AxiosResponse<Soft[]>> =>
  Axios.get(`${BREW_HOST}api/cask.json`);

const loadFormulas = (): Promise<AxiosResponse<Soft[]>> =>
  Axios.get(`${BREW_HOST}api/formula.json`);

const getCallbackMap = <T>([caskCallback, formulaCallback]: [
  (records: T) => () => void,
  (records: T) => () => void
]) => ({
  [SoftType.CASK]: caskCallback,
  [SoftType.FORMULA]: formulaCallback,
});
