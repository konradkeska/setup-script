import { useState, useMemo, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { RWD } from "utils";

export function useSides() {
  const [isLeftExpanded, setLeftExpanded] = useState(false);
  const [isRightExpanded, setRightExpanded] = useState(false);

  const isMobileResolution: boolean = useMediaQuery({ maxWidth: RWD.SM - 1 });

  const collapseRightIsNeeded: boolean = useMemo(
    () => isMobileResolution && isRightExpanded && !isLeftExpanded,
    [isMobileResolution, isRightExpanded, isLeftExpanded]
  );

  const collapseLeftIsNeeded: boolean = useMemo(
    () => isMobileResolution && isLeftExpanded && !isRightExpanded,
    [isMobileResolution, isLeftExpanded, isRightExpanded]
  );

  const toggleLeft = useCallback(() => {
    if (collapseRightIsNeeded) setRightExpanded(false);
    setLeftExpanded(!isLeftExpanded);
  }, [collapseRightIsNeeded, isLeftExpanded]);

  const toggleRight = useCallback(() => {
    if (collapseLeftIsNeeded) setLeftExpanded(false);
    setRightExpanded(!isRightExpanded);
  }, [collapseLeftIsNeeded, isRightExpanded]);

  const memoizedReturn = useMemo(
    () => ({
      isLeftExpanded,
      isRightExpanded,
      toggleLeft,
      toggleRight,
      setLeftExpanded,
      setRightExpanded,
    }),
    [
      isLeftExpanded,
      isRightExpanded,
      toggleLeft,
      toggleRight,
      setLeftExpanded,
      setRightExpanded,
    ]
  );

  return memoizedReturn;
}
