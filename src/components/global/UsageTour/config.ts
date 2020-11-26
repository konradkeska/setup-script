import { ReactourStep } from "reactour";

import { setNativeValue } from "utils";

export const getSteps = (): ReactourStep[] => [
  {
    selector: "#brand",
    content:
      "The main purpose of this app is creating setup scripts for your macOS system. ⚙️",
  },
  {
    selector: "#search-input",
    content:
      "Use search to find useful casks (software with interface) or formulas (command line software).",
  },
  {
    selector: "#search-input",
    content: "Hmm.. let's try typing something in the search input.. 🔍",

    action: (node: HTMLInputElement) => {
      setNativeValue(node, "google");
      node.dispatchEvent(new Event("input", { bubbles: true }));
    },
  },
  {
    selector: "#search-results",
    content: "Here are some of the results... ",
  },
  {
    selector: "#google-chrome",
    content: "Let's try adding something to our script.. 🤔",
    action: (node: HTMLInputElement) => {
      node.dispatchEvent(new Event("click", { bubbles: true }));
    },
  },
  {
    selector: "#google-chrome",
    content:
      "As you can see Google Chrome has been succesfully added to your script. 🎉",
  },
  {
    selector: "#added-casks",
    content: "Here is a list of casks you have already added.",
  },
  {
    selector: "main div",
    content: "You can create a quite complex setup here.",
  },
  {
    selector: "#script-mode-button",
    content: "You can go into script mode.",
    action: (node: HTMLInputElement) => {
      node.dispatchEvent(new Event("click", { bubbles: true }));
    },
  },
  {
    selector: "main div",
    content: "Here is how it looks under the hood.",
  },
  {
    selector: "#edit-mode-button",
    content: "Aaaand go back to the edit mode.",
    action: (node: HTMLInputElement) => {
      node.dispatchEvent(new Event("click", { bubbles: true }));
    },
  },
  {
    selector: "#download-button",
    content:
      "When you are done, you can click this button to download the shell script.",
  },
  {
    selector: "#save-button",
    content:
      "Or.. this button if you feel like sharing your work with someone.",
  },
  {
    selector: "#root",
    content: "Hope you find this tool useful. You can close the dialog now.",
  },
];
