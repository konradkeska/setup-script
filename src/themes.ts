export type Theme = {
  colors: {
    purple: string;
    blue: string;
    green: string;
    red: string;
    font1: string;
    font2: string;
    bg1: string;
    bg2: string;
    bg3: string;
  };
  paddings: {
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
};

export type Mode = keyof Themes;

type Themes = {
  light: Theme;
  dark: Theme;
};

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
      // purple: "#7C89FF",
      // blue: "#16DCFF",
      // green: "#25FF80",
      // red: "#FFA59E",
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

export { themes };
