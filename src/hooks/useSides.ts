import { useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { rwd } from "../utils/rwd";

export function useSides() {
  const [isLeftSideExpanded, setLeftSideExpanded] = useState(false);
  const [isRightSideExpanded, setRightSideExpanded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: rwd.sm - 1 });

  const toggleLeftSide = useCallback(() => {
    if (isMobile && isRightSideExpanded && !isLeftSideExpanded) {
      setRightSideExpanded(false);
    }
    setLeftSideExpanded(!isLeftSideExpanded);
  }, [isMobile, isRightSideExpanded, isLeftSideExpanded]);

  const toggleRightSide = useCallback(() => {
    if (isMobile && isLeftSideExpanded && !isRightSideExpanded) {
      setLeftSideExpanded(false);
    }
    setRightSideExpanded(!isRightSideExpanded);
  }, [isMobile, isLeftSideExpanded, isRightSideExpanded]);

  return {
    isLeftSideExpanded,
    isRightSideExpanded,
    toggleLeftSide,
    toggleRightSide,
    setLeftSideExpanded,
    setRightSideExpanded,
  };
}
