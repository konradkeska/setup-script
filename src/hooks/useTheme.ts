import { useMemo, useState, useCallback } from "react";
import { DefaultTheme, Themes } from "styled-components";

import { dark, light, ThemeMode } from "theme";

export function useTheme(): Return {
  const initialTheme: ThemeMode =
    (window.localStorage.getItem("theme") as ThemeMode) || DEFAULT_THEME;

  const [theme, setTheme] = useState<ThemeMode>(initialTheme);

  const setMode = useCallback((mode: ThemeMode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  }, []);

  const currentTheme = useMemo(() => THEMES[theme], [theme]);

  const switchTheme = useCallback(() => {
    setMode(theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT);
  }, [theme, setMode]);

  const memoizedReturn: Return = useMemo(
    () => [initialTheme, currentTheme, switchTheme],
    [initialTheme, currentTheme, switchTheme]
  );

  return memoizedReturn;
}

type Return = [ThemeMode, DefaultTheme, () => void];

const DEFAULT_THEME: ThemeMode = ThemeMode.DARK;
const THEMES: Themes = { dark, light };
