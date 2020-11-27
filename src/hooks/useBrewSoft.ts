import { useCallback, useMemo } from "react";

import { loadCasks, loadFormulas } from "api";
import { Soft, SoftType } from "types";

import { useList } from "./useList";

export function useBrewSoft() {
  const [
    casks,
    addedCasks,
    addCask,
    removeCask,
    addCasks,
    removeCasks,
  ] = useList([loadCasks, SoftType.CASK]);

  const [
    formulas,
    addedFormulas,
    addFormula,
    removeFormula,
    addFormulas,
    removeFormulas,
  ] = useList([loadFormulas, SoftType.FORMULA]);

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

type SoftCallbacks<T> = [(arg: T) => () => void, (arg: T) => () => void];

const getCallbackMap = <T>([
  caskCallback,
  formulaCallback,
]: SoftCallbacks<T>) => ({
  [SoftType.CASK]: caskCallback,
  [SoftType.FORMULA]: formulaCallback,
});
