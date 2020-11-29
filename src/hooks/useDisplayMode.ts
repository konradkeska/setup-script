import { useState } from "react";

import { DisplayMode } from "types";

export function useDisplayMode(): Return {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.EDITOR
  );

  const switchToEditor = () => setDisplayMode(DisplayMode.EDITOR);

  const switchToScript = () => setDisplayMode(DisplayMode.SCRIPT);

  return [displayMode, switchToEditor, switchToScript];
}

type Return = [DisplayMode, () => void, () => void];
