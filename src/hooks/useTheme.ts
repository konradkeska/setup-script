import { useMemo, useState, useCallback } from "react";
import { DefaultTheme } from "styled-components";

import { Theme } from "types";
import { THEMES } from "config";

const DEFAULT_THEME: Theme = Theme.DARK;

type Return = [
  initialTheme: Theme,
  currentTheme: DefaultTheme,
  switchTheme: () => void
];

export function useTheme(): Return {
  const initialTheme: Theme =
    (window.localStorage.getItem("theme") as Theme) || DEFAULT_THEME;

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const setMode = useCallback((mode: Theme) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  }, []);

  const currentTheme = useMemo(() => THEMES[theme], [theme]);

  const switchTheme = useCallback(() => {
    setMode(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, [theme, setMode]);

  const memoizedReturn: Return = useMemo(
    () => [initialTheme, currentTheme, switchTheme],
    [initialTheme, currentTheme, switchTheme]
  );

  return memoizedReturn;
}
