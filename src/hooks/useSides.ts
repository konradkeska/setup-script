import { useState, useMemo, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { RWD } from "utils";

export function useSides() {
  const [isLeftExpanded, setLeftExpanded] = useState(false);
  const [isRightExpanded, setRightExpanded] = useState(false);

  const isMobileResolution = useMediaQuery({ maxWidth: RWD.SM - 1 });

  const isCollapseRightNeeded = useMemo(
    () => isMobileResolution && isRightExpanded && !isLeftExpanded,
    [isMobileResolution, isRightExpanded, isLeftExpanded]
  );

  const isCollapseLeftNeeded = useMemo(
    () => isMobileResolution && isLeftExpanded && !isRightExpanded,
    [isMobileResolution, isLeftExpanded, isRightExpanded]
  );

  const toggleLeft = useCallback(() => {
    if (isCollapseRightNeeded) setRightExpanded(false);
    setLeftExpanded(!isLeftExpanded);
  }, [isCollapseRightNeeded, isLeftExpanded]);

  const toggleRight = useCallback(() => {
    if (isCollapseLeftNeeded) setLeftExpanded(false);
    setRightExpanded(!isRightExpanded);
  }, [isCollapseLeftNeeded, isRightExpanded]);

  const memoizedReturn = useMemo(
    () => ({
      isLeftExpanded,
      isRightExpanded,
      toggleLeft,
      toggleRight,
      setLeftExpanded,
      setRightExpanded,
    }),
    [isLeftExpanded, isRightExpanded, toggleLeft, toggleRight]
  );

  return memoizedReturn;
}
