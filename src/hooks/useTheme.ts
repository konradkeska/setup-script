import { useMemo, useState } from "react";
import { Mode, Themes } from "styled-components";

const DEFAULT_THEME: Mode = "dark";

export function useTheme() {
  const initialTheme: Mode =
    (window.localStorage.getItem("theme") as Mode) || DEFAULT_THEME;

  const [theme, setTheme] = useState<Mode>(initialTheme);

  const setMode = (mode: Mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const switchTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  const currentTheme = useMemo(() => themes[theme], [theme]);

  return { theme: currentTheme, switchTheme };
}

const themes: Themes = {
  dark: {
    colors: {
      primary: {
        purple: "#6875f5",
        blue: "#06b5d4",
        green: "#23CE6B",
        red: "#F7567C",
      },
      font: {
        base: "#f5f5f5",
        sub: "#252f3f",
      },
      material: {
        input: "#161e2e",
        overlay: "#212A3D",
        background: "#111827",
      },
    },
    paddings: {
      xs: "6px",
      sm: "16px",
      md: "24px",
      lg: "40px",
      xl: "66px",
    },
    shadows: {
      base:
        "0 2.8px 2.2px rgba(37, 47, 63, 0.034), 0 6.7px 5.3px rgba(37, 47, 63, 0.048), 0 12.5px 10px rgba(37, 47, 63, 0.06), 0 22.3px 17.9px rgba(37, 47, 63, 0.072), 0 41.8px 33.4px rgba(37, 47, 63, 0.086), 0 100px 80px rgba(37, 47, 63, 0.12)",
    },
  },
  light: {
    colors: {
      primary: {
        purple: "#8591FF",
        blue: "#7CE9E9",
        green: "#87F29E",
        red: "#FFA5C3",
      },
      font: {
        base: "#444444",
        sub: "#cccccc",
      },
      material: {
        input: "#eeeeee",
        overlay: "#f5f5f5",
        background: "#dddddd",
      },
    },
    paddings: {
      xs: "6px",
      sm: "16px",
      md: "24px",
      lg: "40px",
      xl: "66px",
    },
    shadows: {
      base:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.017), 0 6.7px 5.3px rgba(0, 0, 0, 0.024), 0 12.5px 10px rgba(0, 0, 0, 0.03), 0 22.3px 17.9px rgba(0, 0, 0, 0.036), 0 41.8px 33.4px rgba(0, 0, 0, 0.043), 0 100px 80px rgba(0, 0, 0, 0.06)",
    },
  },
};

export enum PrimaryColors {
  PURPLE = "purple",
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
}

export enum FontColors {
  BASE = "base",
  SUB = "sub",
}

export enum MaterialColors {
  INPUT = "input",
  OVERLAY = "overlay",
  BACKGROUND = "background",
}

export enum Paddings {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum Shadows {
  BASE = "base",
}

export const Colors = {
  PRIMARY: PrimaryColors,
  FONT: FontColors,
  MATERIAL: MaterialColors,
};

export const Theme = {
  COLORS: Colors,
  PADDINGS: Paddings,
  SHADOWS: Shadows,
};
