import { useCallback, useMemo } from "react";

import { loadCasks, loadFormulas, Soft, SoftType } from "api";

import { useList } from "./useList";
import { useDetails } from "./useDetails";

export function useBrewSoft() {
  const [
    focusedCask,
    casks,
    addedCasks,
    addCask,
    removeCask,
    addCasks,
    removeCasks,
  ] = useList([loadCasks, SoftType.CASK]);

  const [
    focusedFormula,
    formulas,
    addedFormulas,
    addFormula,
    removeFormula,
    addFormulas,
    removeFormulas,
  ] = useList([loadFormulas, SoftType.FORMULA]);

  const details = useDetails(focusedFormula, focusedCask);

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
      details,
      casks,
      addedCasks,
      formulas,
      addedFormulas,
      onAdd,
      onRemove,
      onMultiAdd,
      onMultiRemove,
    }),
    [
      details,
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
