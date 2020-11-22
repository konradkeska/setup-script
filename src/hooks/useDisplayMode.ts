import { useCallback, useMemo, useState } from "react";

import { DisplayMode } from "types";

type Return = [DisplayMode, () => void];

export function useDisplayMode(): Return {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.PICKER
  );

  const switchDisplayMode = useCallback(
    () =>
      setDisplayMode(
        displayMode === DisplayMode.PICKER
          ? DisplayMode.SCRIPT
          : DisplayMode.PICKER
      ),
    [displayMode]
  );

  const memoizedReturn: Return = useMemo(
    () => [displayMode, switchDisplayMode],
    [displayMode, switchDisplayMode]
  );

  return memoizedReturn;
}
