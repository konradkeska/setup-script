import { useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { rwd } from "utils";

export function useSides() {
  const [isLeftExpanded, setLeftExpanded] = useState(false);
  const [isRightExpanded, setRightExpanded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: rwd.sm - 1 });

  const toggleLeft = useCallback(() => {
    if (isMobile && isRightExpanded && !isLeftExpanded) {
      setRightExpanded(false);
    }
    setLeftExpanded(!isLeftExpanded);
  }, [isMobile, isRightExpanded, isLeftExpanded]);

  const toggleRight = useCallback(() => {
    if (isMobile && isLeftExpanded && !isRightExpanded) {
      setLeftExpanded(false);
    }
    setRightExpanded(!isRightExpanded);
  }, [isMobile, isLeftExpanded, isRightExpanded]);

  return {
    isLeftExpanded,
    isRightExpanded,
    toggleLeft,
    toggleRight,
    setLeftExpanded,
    setRightExpanded,
  };
}
