import { useCallback, useEffect, useState } from "react";

import { loadBrewData } from "../api";
import { toBaseCask, toBaseFormula } from "../mappers";
import { IBaseCask, IBaseFormula } from "../types";

// unused
export function useSearch() {
  const [query, setQuery] = useState<string>("");
  const [casks, setCasks] = useState<IBaseCask[]>([]);
  const [formulas, setFormulas] = useState<IBaseFormula[]>([]);

  const loadData = useCallback(async () => {
    const [casks, formulas] = await loadBrewData();
    setCasks(toBaseCask(casks.data));
    setFormulas(toBaseFormula(formulas.data));
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value),
    []
  );

  return { onChange, query, setQuery, casks, formulas };
}
