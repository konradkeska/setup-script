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
  },
  light: {
    colors: {
      purple: "#6875f5",
      blue: "#06b5d4",
      green: "#23CE6B",
      red: "#FF928B",
      font1: "#555555",
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
  },
};
