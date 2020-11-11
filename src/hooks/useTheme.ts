import { useMemo, useState } from "react";
import { DefaultTheme } from "styled-components";

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

type Themes = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

export type Mode = keyof Themes;

const themes: Themes = {
  dark: {
    colors: {
      purple: "#6875f5",
      blue: "#06b5d4",
      green: "#23CE6B",
      red: "#F7567C",
      font1: "#f5f5f5",
      font2: "#252f3f",
      bg1: "#111827",
      bg2: "#212A3D",
      bg3: "#161e2e",
    },
    paddings: {
      xSmall: "6px",
      small: "16px",
      medium: "24px",
      large: "40px",
      xLarge: "66px",
    },
    shadows: {
      searchPanel:
        "0 2.8px 2.2px rgba(37, 47, 63, 0.034), 0 6.7px 5.3px rgba(37, 47, 63, 0.048), 0 12.5px 10px rgba(37, 47, 63, 0.06), 0 22.3px 17.9px rgba(37, 47, 63, 0.072), 0 41.8px 33.4px rgba(37, 47, 63, 0.086), 0 100px 80px rgba(37, 47, 63, 0.12)",
    },
  },
  light: {
    colors: {
      purple: "#8591FF",
      blue: "#25DEFF",
      green: "#34FF89",
      red: "#FFADA7",
      font1: "#444444",
      font2: "#cccccc",
      bg1: "#f5f5f5",
      bg2: "#eeeeee",
      bg3: "#dddddd",
    },
    paddings: {
      xSmall: "6px",
      small: "16px",
      medium: "24px",
      large: "40px",
      xLarge: "66px",
    },
    shadows: {
      searchPanel:
        "0 2.8px 2.2px rgba(0, 0, 0, 0.017), 0 6.7px 5.3px rgba(0, 0, 0, 0.024), 0 12.5px 10px rgba(0, 0, 0, 0.03), 0 22.3px 17.9px rgba(0, 0, 0, 0.036), 0 41.8px 33.4px rgba(0, 0, 0, 0.043), 0 100px 80px rgba(0, 0, 0, 0.06)",
    },
  },
};
