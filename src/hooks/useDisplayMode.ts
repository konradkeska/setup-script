import { useState, useCallback } from "react";

enum DisplayMode {
  PICKER = "picker",
  SCRIPT = "script",
}

export function useDisplayMode() {
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

  return { displayMode, switchDisplayMode, DisplayMode };
}
