import { useMemo, useState, useCallback } from "react";
import { DefaultTheme, Themes } from "styled-components";

import { ThemeMode } from "types";

type Return = [ThemeMode, DefaultTheme, () => void];

export function useTheme(): Return {
  const initialTheme: ThemeMode =
    (window.localStorage.getItem("theme") as ThemeMode) || DEFAULT_THEME;

  const [theme, setTheme] = useState<ThemeMode>(initialTheme);

  const setMode = useCallback((mode: ThemeMode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  }, []);

  const switchTheme = useCallback(() => {
    theme === ThemeMode.LIGHT
      ? setMode(ThemeMode.DARK)
      : setMode(ThemeMode.LIGHT);
  }, [theme, setMode]);

  const currentTheme = useMemo(() => THEMES[theme], [theme]);

  return [initialTheme, currentTheme, switchTheme];
}

const DEFAULT_THEME: ThemeMode = ThemeMode.DARK;

const THEMES: Themes = {
  dark: {
    colors: {
      primary: {
        purple: "rgb(104, 117, 245)",
        blue: "rgb(6, 181, 212)",
        green: "rgb(35, 206, 107)",
        red: "rgb(247, 86, 124)",
      },
      font: {
        base: "rgb(245, 245, 245)",
        sub: "rgb(102, 105,	111)",
      },
      material: {
        input: "rgb(51, 55, 62)",
        side: "rgb(56, 60, 68)",
        overlay: "rgb(61, 66, 74)",
        background: "rgb(40, 44, 52)",
      },
    },
    paddings: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32,
      xl: 66,
    },
    shadows: {
      base:
        "0 2.8px 2.2px rgba(37, 47, 63, 0.034), 0 6.7px 5.3px rgba(37, 47, 63, 0.048), 0 12.5px 10px rgba(37, 47, 63, 0.06), 0 22.3px 17.9px rgba(37, 47, 63, 0.072), 0 41.8px 33.4px rgba(37, 47, 63, 0.086), 0 100px 80px rgba(37, 47, 63, 0.12)",
    },
    radiuses: {
      xs: 4,
      sm: 6,
      md: 10,
    },
  },
  light: {
    colors: {
      primary: {
        purple: "rgb(133, 145, 255)",
        blue: "rgb(124, 233, 233)",
        green: "rgb(135, 242, 158)",
        red: "rgb(255, 165, 195)",
      },
      font: {
        base: "rgb(34, 34, 34)",
        sub: "rgb(179, 179, 179)",
      },
      material: {
        input: "rgb(229,	229,	229)",
        side: "rgb(235,	235,	235)",
        overlay: "rgb(242, 242, 242)",
        background: "rgb(255,	255, 255)",
      },
    },
    paddings: {
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32,
      xl: 66,
    },
    shadows: {
      base:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.017), 0 6.7px 5.3px rgba(0, 0, 0, 0.024), 0 12.5px 10px rgba(0, 0, 0, 0.03), 0 22.3px 17.9px rgba(0, 0, 0, 0.036), 0 41.8px 33.4px rgba(0, 0, 0, 0.043), 0 100px 80px rgba(0, 0, 0, 0.06)",
    },
    radiuses: {
      xs: 4,
      sm: 6,
      md: 10,
    },
  },
};
