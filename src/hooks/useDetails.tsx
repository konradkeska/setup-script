import { useCallback, useEffect, useState } from "react";

import {
  loadCask,
  loadFormula,
  CaskDetails,
  FormulaDetails,
  Soft,
  SoftType,
} from "api";

type Details = {
  name: string;
  desc: string;
  homepage: string;
  installs: number;
  version: string;
  conflicts: number;
};

export function useDetails(
  focusedFormula: Soft | null,
  focusedCask: Soft | null
) {
  const [focusedSoft, setFocusedSoft] = useState<Soft | null>(null);
  const [details, setDetails] = useState<Details | null>(null);

  const handleLoadDetails = useCallback(async () => {
    if (focusedSoft?.name || focusedSoft?.token) {
      const identifier = getSoftIdentifier(focusedSoft);

      if ((focusedSoft.type || SoftType.CASK) === SoftType.FORMULA) {
        const { data } = await loadFormula(identifier);
        data && setDetails(receiveDetails(data));
      } else {
        const { data } = await loadCask(identifier);
        data && setDetails(receiveDetails(data));
      }
    }
  }, [focusedSoft]);

  useEffect(() => {
    setFocusedSoft(focusedFormula);
  }, [focusedFormula]);

  useEffect(() => {
    setFocusedSoft(focusedCask);
  }, [focusedCask]);

  useEffect(() => {
    handleLoadDetails();
  }, [handleLoadDetails]);

  return details;
}

const getSoftIdentifier = (soft: Soft) =>
  soft.type === SoftType.CASK ? soft?.token || soft.name : soft.name;

const receiveDetails = (response: CaskDetails | FormulaDetails): Details => ({
  name: typeof response.name !== "string" ? response.name[0] : response.name,
  desc: response.desc,
  homepage: response.homepage,
  conflicts: response.conflicts_with?.length || 0,
  installs: Object.values(response.analytics.install["365d"])?.[0] || 0,
  version: (response as CaskDetails).version
    ? (response as CaskDetails).version
    : (response as FormulaDetails).versions.stable,
});
