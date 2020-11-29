import { useCallback, useEffect, useMemo, useState } from "react";

import { getCasks, getFormulas } from "services/brew";
import { addBundle, updateBundle, loadBundle } from "services/bundle";
import { Action } from "types";
import { Soft, SoftType, Bundle } from "types";
import { getActiveBundleId, toSoftId, toSoftType } from "utils";

import { useList } from "./useList";
import { useDetails } from "./useDetails";

export function useBrewSoft() {
  const [wasLoaded, setWasLoaded] = useState(false);
  const [initBundle, setInitBundle] = useState<Bundle | null>(null);

  const [
    focusedCask,
    casks,
    addedCasks,
    addCask,
    removeCask,
    addCasks,
    removeCasks,
  ] = useList([getCasks, SoftType.CASK]);

  const [
    focusedFormula,
    formulas,
    addedFormulas,
    addFormula,
    removeFormula,
    addFormulas,
    removeFormulas,
  ] = useList([getFormulas, SoftType.FORMULA]);

  const details = useDetails(focusedFormula, focusedCask);

  const onAdd = useCallback(
    (record: Soft) => {
      return getCallbackMap([addCask, addFormula])[toSoftType(record)](record);
    },
    [addCask, addFormula]
  );

  const onRemove = useCallback(
    (record: Soft) => {
      return getCallbackMap([removeCask, removeFormula])[toSoftType(record)](
        record
      );
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

  const getAllCasks = useCallback(
    (tokens?: string[]): Soft[] => {
      return [...casks, ...addedCasks].filter(({ token, name }: Soft) =>
        tokens?.includes(token || name || "")
      );
    },
    [casks, addedCasks]
  );

  const getAllFormulas = useCallback(
    (names?: string[]): Soft[] => {
      return [...formulas, ...addedFormulas].filter(({ name }: Soft) =>
        names?.includes(name || "")
      );
    },
    [formulas, addedFormulas]
  );

  const getAddedSoftIds = useCallback(
    (): string[] => [...addedCasks, ...addedFormulas].map(toSoftId),
    [addedCasks, addedFormulas]
  );

  const getAvailableToAdd = useCallback(
    (bundle: Bundle): string[] => {
      const bundleSoftIds = [
        ...(bundle.casks || []),
        ...(bundle.formulas || []),
      ];
      const addedSoftIds = getAddedSoftIds();
      return bundleSoftIds.filter((entry) => !addedSoftIds.includes(entry));
    },
    [getAddedSoftIds]
  );

  const getAction = useCallback(
    (bundle: Bundle): Action => {
      const availableToAddCount = getAvailableToAdd(bundle).length;
      return availableToAddCount > 0 ? Action.SUCCESS : Action.ERROR;
    },
    [getAvailableToAdd]
  );

  const getActionCallback = useCallback(
    (action: Action) => {
      return action === Action.SUCCESS ? onMultiAdd : onMultiRemove;
    },
    [onMultiAdd, onMultiRemove]
  );

  const getSoftPackagesFrom = useCallback(
    (bundle: Bundle): [Soft[], Soft[]] => {
      const casksBundle = getAllCasks(bundle.casks);
      const formulasBundle = getAllFormulas(bundle.formulas);
      return [casksBundle, formulasBundle];
    },
    [getAllCasks, getAllFormulas]
  );

  const activeBundleBody = useMemo(
    () => ({
      name: "",
      casks: addedCasks.map(({ token, name }) => token || name),
      formulas: addedFormulas.map(({ name }) => name),
    }),
    [addedCasks, addedFormulas]
  );

  const handleBundleSave = useCallback(() => {
    const activeBundleId = getActiveBundleId();
    return activeBundleId
      ? updateBundle(activeBundleId, activeBundleBody)
      : addBundle(activeBundleBody);
  }, [activeBundleBody]);

  const handleBundleLoad = useCallback(
    (bundle: Bundle) => {
      const bundleAction = getAction(bundle);
      const actionCallback = getActionCallback(bundleAction);
      const [casksBundle, formulasBundle] = getSoftPackagesFrom(bundle);
      return () => {
        actionCallback(casksBundle, SoftType.CASK);
        actionCallback(formulasBundle, SoftType.FORMULA);
      };
    },
    [getAction, getActionCallback, getSoftPackagesFrom]
  );

  const loadData = useCallback(async () => {
    const activeBundleId = getActiveBundleId();
    const initBundle = await loadBundle(activeBundleId);
    if (initBundle) setInitBundle(initBundle);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (initBundle && !wasLoaded) {
      handleBundleLoad(initBundle)();
      setWasLoaded(true);
    }
  }, [initBundle, handleBundleLoad, wasLoaded]);

  const memoizedReturn = useMemo(
    () => ({
      details,
      casks,
      addedCasks,
      formulas,
      addedFormulas,
      onAdd,
      onRemove,
      handleBundleLoad,
      handleBundleSave,
    }),
    [
      details,
      casks,
      addedCasks,
      formulas,
      addedFormulas,
      onAdd,
      onRemove,
      handleBundleLoad,
      handleBundleSave,
    ]
  );

  return memoizedReturn;
}

const getCallbackMap = <T>([caskCallback, formulaCallback]: [
  (arg: T) => () => void,
  (arg: T) => () => void
]) => ({
  [SoftType.CASK]: caskCallback,
  [SoftType.FORMULA]: formulaCallback,
});
