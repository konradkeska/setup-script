import { useState } from "react";

import { DisplayMode } from "types";

type Return = [DisplayMode, () => void];

export function useDisplayMode(): Return {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.PICKER
  );

  const switchDisplayMode = () =>
    setDisplayMode(
      displayMode === DisplayMode.PICKER
        ? DisplayMode.SCRIPT
        : DisplayMode.PICKER
    );

  return [displayMode, switchDisplayMode];
}
