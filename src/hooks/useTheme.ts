import { useMemo, useState, useCallback } from "react";
import { DefaultTheme, Themes } from "styled-components";

import { ThemeMode } from "types";

import dark from "themes/dark.json";
import light from "themes/light.json";

type Return = [ThemeMode, DefaultTheme, () => void];

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

const DEFAULT_THEME: ThemeMode = ThemeMode.DARK;
const THEMES: Themes = { dark, light };
