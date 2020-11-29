import { useCallback, useEffect, useState } from "react";

import { loadDetails } from "services/brew";
import { Details, Soft } from "types";

export function useDetails(
  focusedFormula: Soft | null,
  focusedCask: Soft | null
) {
  const [focusedSoft, setFocusedSoftId] = useState<Soft | null>(null);
  const [details, setDetails] = useState<Details | null>(null);

  const loadData = useCallback(async () => {
    const data = await loadDetails(focusedSoft);
    if (data) setDetails(data);
  }, [focusedSoft]);

  useEffect(() => {
    setFocusedSoftId(focusedFormula);
  }, [focusedFormula]);

  useEffect(() => {
    setFocusedSoftId(focusedCask);
  }, [focusedCask]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return details;
}
