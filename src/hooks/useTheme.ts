import { useMemo, useState, useCallback } from "react";
import { Mode } from "styled-components";

import { themes } from "utils";

enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

const DEFAULT_THEME: ThemeMode = ThemeMode.DARK;

export function useTheme() {
  const initialTheme: Mode =
    (window.localStorage.getItem("theme") as ThemeMode) || DEFAULT_THEME;

  const [theme, setTheme] = useState<Mode>(initialTheme);

  const setMode = useCallback((mode: Mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  }, []);

  const switchTheme = useCallback(() => {
    theme === ThemeMode.LIGHT
      ? setMode(ThemeMode.DARK)
      : setMode(ThemeMode.LIGHT);
  }, [theme, setMode]);

  const currentTheme = useMemo(() => themes[theme], [theme]);

  return { mode: initialTheme, theme: currentTheme, switchTheme, ThemeMode };
}
