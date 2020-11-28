import { useCallback, useMemo, useState } from "react";

export enum DisplayMode {
  EDITOR = "editor",
  SCRIPT = "script",
}

export function useDisplayMode(): Return {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.EDITOR
  );

  const defaultMode =
    displayMode === DisplayMode.EDITOR
      ? DisplayMode.SCRIPT
      : DisplayMode.EDITOR;

  const switchDisplayMode = useCallback(
    (mode?: DisplayMode) =>
      mode ? setDisplayMode(mode) : setDisplayMode(defaultMode),
    [defaultMode]
  );

  const memoizedReturn: Return = useMemo(
    () => [displayMode, switchDisplayMode],
    [displayMode, switchDisplayMode]
  );

  return memoizedReturn;
}

type Return = [DisplayMode, (mode?: DisplayMode) => void];
