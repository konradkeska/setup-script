import { useMemo, useState } from "react";
import { Mode } from "styled-components";

import { themes } from "utils";

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

  return { mode: initialTheme, theme: currentTheme, switchTheme };
}
