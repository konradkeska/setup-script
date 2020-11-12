import React from "react";
import { DefaultTheme } from "styled-components";
import { ReactourStep } from "reactour";

import { setNativeValue } from "./helpers";

const getTourStepStyle = (theme: DefaultTheme): React.CSSProperties => ({
  backgroundColor: theme.colors.material.overlay,
  color: theme.colors.font.base,
});

export const getTourSteps = (theme: DefaultTheme): ReactourStep[] => [
  {
    selector: "#brand",
    content:
      "The main purpose of this app is creating setup scripts for your macOS system. ⚙️",
    style: getTourStepStyle(theme),
    stepInteraction: false,
  },
  {
    selector: "#search-input",
    content:
      "Use search to find useful casks (programs), formulas (CLI programs) or macOS settings. 🤔",
    style: getTourStepStyle(theme),
    stepInteraction: false,
  },
  {
    selector: "#search-input",
    content: "Hmm.. let's try typing something in the search input.. 🔍",
    style: getTourStepStyle(theme),
    stepInteraction: false,
    action: (node: HTMLInputElement) => {
      setNativeValue(node, "google");
      node.dispatchEvent(new Event("input", { bubbles: true }));
    },
  },
  {
    selector: "#found-casks",
    content: "Here are some of the results search has founded. 📜",
    style: getTourStepStyle(theme),
    stepInteraction: false,
  },
  {
    selector: "#google-chrome",
    content:
      "Let's try adding something to our script. 🤔 Click on Google Chrome and go to the next step.",
    style: getTourStepStyle(theme),
    stepInteraction: true,
  },
  {
    selector: "#added-casks",
    content:
      "As you can see Google Chrome has been succesfully added to your script 'recipe'. 🎉",
    style: getTourStepStyle(theme),
    stepInteraction: false,
  },
  {
    selector: "main div",
    content:
      "You can create quite complex lists of programs, CLI utils and MacOS native system settings. 🚀",
    style: getTourStepStyle(theme),
    stepInteraction: false,
  },
  {
    selector: "#download-button",
    content: (
      <p>
        When you are done, you can click this button to download the shell
        script.
        <br />
        <br />
        Thanks you for your patience and hope you find this useful. 💜
        <br />
        <br />
        You can close this diagram now.
      </p>
    ),
    style: getTourStepStyle(theme),
    stepInteraction: true,
  },
];
