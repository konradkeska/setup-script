import { Action, Preset, Soft, SoftType } from "types";

type Props = {
  casks: Soft[];
  formulas: Soft[];
  addedCasks: Soft[];
  addedFormulas: Soft[];
  onMultiAdd: (records: Soft[], type: SoftType) => void;
  onMultiRemove: (records: Soft[], type: SoftType) => void;
};

type Return = [(preset: Preset) => () => void, Preset[]];

export function usePreset({
  casks,
  formulas,
  addedCasks,
  addedFormulas,
  onMultiAdd,
  onMultiRemove,
}: Props): Return {
  const getCasks = (names?: string[]) =>
    [...casks, ...addedCasks].filter(({ token }) =>
      names?.includes(token || "")
    );

  const getFormulas = (tokens?: string[]) =>
    [...formulas, ...addedFormulas].filter(({ name }) =>
      tokens?.includes(name)
    );

  const getSoft = ({ casks, formulas }: Preset) => [
    ...(casks || []),
    ...(formulas || []),
  ];

  const getAddedSoft = () => [
    ...addedCasks.map(({ token }) => token),
    ...addedFormulas.map(({ name }) => name),
  ];

  const getAvailableToAdd = (preset: Preset) => {
    const presetSoft = getSoft(preset);
    const addedSoft = getAddedSoft();
    return presetSoft.filter((entry) => !addedSoft.includes(entry));
  };

  const getAction = (preset: Preset) => {
    const availableToAddCount = getAvailableToAdd(preset).length;
    return availableToAddCount > 0 ? Action.ADD : Action.REMOVE;
  };

  const getActionCallback = (presetAction: Action) => {
    return presetAction === Action.ADD ? onMultiAdd : onMultiRemove;
  };

  const getPackagesFromConfig = ({ casks, formulas }: Preset) => {
    const presetCasks = getCasks(casks);
    const presetFormulas = getFormulas(formulas);
    return [presetCasks, presetFormulas];
  };

  const onClick = (preset: Preset) => {
    const presetAction = getAction(preset);
    const actionCallback = getActionCallback(presetAction);
    const [casks, formulas] = getPackagesFromConfig(preset);
    return () => {
      actionCallback(casks, SoftType.CASK);
      actionCallback(formulas, SoftType.FORMULA);
    };
  };

  return [onClick, PRESETS];
}

const PRESETS: Preset[] = [
  {
    name: "Base Essentials",
    casks: [
      "alfred",
      "appcleaner",
      "google-chrome",
      "rectangle",
      "spotify",
      "the-unarchiver",
      "vlc",
      "transmission",
    ],
    formulas: [],
  },
  {
    name: "Social Essentials",
    casks: ["slack", "discord", "rocket"],
    formulas: [],
  },
  {
    name: "Dev Essentials",
    casks: [
      "gitkraken",
      "insomnia",
      "visual-studio-code",
      "iterm2",
      "cyberduck",
    ],
    formulas: [
      "git",
      "zsh",
      "zsh-autosuggestions",
      "zsh-syntax-highlighting",
      "zsh-completions",
      "zsh-history-substring-search",
      "wget",
      "tree",
      "openssl@1.1",
    ],
  },
  {
    name: "JavaScript Essentials",
    casks: [],
    formulas: ["node", "yarn", "nvm"],
  },
  {
    name: "Java Essentials",
    casks: [],
    formulas: ["openjdk"],
  },
];
