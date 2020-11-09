import { useCallback, useState } from "react";

import { IBaseCask, IBaseFormula } from "../types";

export function useResults(
  setQuery: React.Dispatch<React.SetStateAction<string>>
) {
  const [addedCasks, setAddedCasks] = useState<IBaseCask[]>([]);
  const [addedFormulas, setAddedFormulas] = useState<IBaseFormula[]>([]);

  const addCask = useCallback(
    (cask: IBaseCask) => () => {
      if (!addedCasks.find((item) => item.name === cask.name)) {
        setAddedCasks([...addedCasks, cask]);
        setQuery("");
      }
    },
    [addedCasks]
  );

  const addFormula = useCallback(
    (formula: IBaseFormula) => () => {
      if (!addedFormulas.find((item) => item.name === formula.name)) {
        setAddedFormulas([...addedFormulas, formula]);
        setQuery("");
      }
    },
    [addedFormulas]
  );

  const removeCask = useCallback(
    (cask: IBaseCask) => () =>
      setAddedCasks(addedCasks.filter((item) => item.name !== cask.name)),
    [addedCasks]
  );

  const removeFormula = useCallback(
    (cask: IBaseFormula) => () =>
      setAddedFormulas(addedFormulas.filter((item) => item.name !== cask.name)),
    [addedFormulas]
  );

  return {
    addedCasks,
    addedFormulas,
    addCask,
    addFormula,
    removeCask,
    removeFormula,
  };
}
