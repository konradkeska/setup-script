import { useCallback, useMemo } from "react";
import Axios, { AxiosResponse } from "axios";

import { Soft, SoftType } from "../types";
import { useList } from "./useList";

export function useBrewSoft() {
  const [
    casks,
    addedCasks,
    addCask,
    removeCask,
    addCasks,
    removeCasks,
  ] = useList({ loader: loadCasks, type: SoftType.CASK });

  const [
    formulas,
    addedFormulas,
    addFormula,
    removeFormula,
    addFormulas,
    removeFormulas,
  ] = useList({ loader: loadFormulas, type: SoftType.FORMULA });

  const onAdd = useCallback(
    (record: Soft) => {
      return getCallbackMap([addCask, addFormula])[
        record.type || SoftType.CASK
      ](record);
    },
    [addCask, addFormula]
  );

  const onRemove = useCallback(
    (record: Soft) => {
      return getCallbackMap([removeCask, removeFormula])[
        record.type || SoftType.CASK
      ](record);
    },
    [removeCask, removeFormula]
  );

  const onMultiAdd = useCallback(
    (records: Soft[], type: SoftType) => {
      return getCallbackMap([addCasks, addFormulas])[type](records)();
    },
    [addCasks, addFormulas]
  );

  const onMultiRemove = useCallback(
    (records: Soft[], type: SoftType) => {
      return getCallbackMap([removeCasks, removeFormulas])[type](records)();
    },
    [removeCasks, removeFormulas]
  );

  const memoizedReturn = useMemo(
    () => ({
      casks,
      addedCasks,
      formulas,
      addedFormulas,
      onAdd,
      onRemove,
      onMultiAdd,
      onMultiRemove,
      loadInfo,
    }),
    [
      casks,
      addedCasks,
      formulas,
      addedFormulas,
      onAdd,
      onRemove,
      onMultiAdd,
      onMultiRemove,
    ]
  );

  return memoizedReturn;
}

const BREW_API_HOST = "https://formulae.brew.sh/api/";

const loadCask = (name: string): Promise<AxiosResponse<any>> =>
  Axios.get(`${BREW_API_HOST}cask/${name}.json`);

const loadFormula = (token: string): Promise<AxiosResponse<any>> =>
  Axios.get(`${BREW_API_HOST}formula/${token}.json`);

const loadInfo = (identifier: string, type: SoftType) =>
  type === SoftType.CASK ? loadCask(identifier) : loadFormula(identifier);

const loadCasks = (): Promise<AxiosResponse<Soft[]>> =>
  Axios.get(`${BREW_API_HOST}cask.json`);

const loadFormulas = (): Promise<AxiosResponse<Soft[]>> =>
  Axios.get(`${BREW_API_HOST}formula.json`);

type SoftCallbacks<T> = [(arg: T) => () => void, (arg: T) => () => void];

const getCallbackMap = <T>([
  caskCallback,
  formulaCallback,
]: SoftCallbacks<T>) => ({
  [SoftType.CASK]: caskCallback,
  [SoftType.FORMULA]: formulaCallback,
});
