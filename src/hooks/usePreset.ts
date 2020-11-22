import { useCallback, useMemo } from "react";
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
  const getCasks = useCallback(
    (names?: string[]): Soft[] =>
      [...casks, ...addedCasks].filter(({ token }) =>
        names?.includes(token || "")
      ),
    [casks, addedCasks]
  );

  const getFormulas = useCallback(
    (tokens?: string[]): Soft[] =>
      [...formulas, ...addedFormulas].filter(({ name }) =>
        tokens?.includes(name)
      ),
    [formulas, addedFormulas]
  );

  const getSoft = useCallback(
    (preset: Preset): string[] => [
      ...(preset.casks || []),
      ...(preset.formulas || []),
    ],
    []
  );

  const getAddedSoft = useCallback(
    (): string[] => [
      ...addedCasks.map(({ name, token }) => token || name),
      ...addedFormulas.map(({ name }) => name),
    ],
    [addedCasks, addedFormulas]
  );

  const getAvailableToAdd = useCallback(
    (preset: Preset): string[] => {
      const presetSoft = getSoft(preset);
      const addedSoft = getAddedSoft();
      return presetSoft.filter((entry) => !addedSoft.includes(entry));
    },
    [getSoft, getAddedSoft]
  );

  const getAction = useCallback(
    (preset: Preset): Action => {
      const availableToAddCount = getAvailableToAdd(preset).length;
      return availableToAddCount > 0 ? Action.ADD : Action.REMOVE;
    },
    [getAvailableToAdd]
  );

  const getActionCallback = useCallback(
    (presetAction: Action) => {
      return presetAction === Action.ADD ? onMultiAdd : onMultiRemove;
    },
    [onMultiAdd, onMultiRemove]
  );

  const getSoftPackagesFromPreset = useCallback(
    (preset: Preset): [Soft[], Soft[]] => {
      const presetCasks = getCasks(preset.casks);
      const presetFormulas = getFormulas(preset.formulas);
      return [presetCasks, presetFormulas];
    },
    [getCasks, getFormulas]
  );

  const onClick = useCallback(
    (preset: Preset) => {
      const presetAction = getAction(preset);
      const actionCallback = getActionCallback(presetAction);
      const [presetCasks, presetFormulas] = getSoftPackagesFromPreset(preset);
      return () => {
        actionCallback(presetCasks, SoftType.CASK);
        actionCallback(presetFormulas, SoftType.FORMULA);
      };
    },
    [getAction, getActionCallback, getSoftPackagesFromPreset]
  );

  const memoizedReturn: Return = useMemo(() => [onClick, FEATURED_PRESETS], [
    onClick,
  ]);

  return memoizedReturn;
}

const FEATURED_PRESETS: Preset[] = [
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
