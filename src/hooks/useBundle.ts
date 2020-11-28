import { useCallback, useMemo } from "react";

import { Soft, SoftType } from "api";
import { Action } from "theme";

export type Bundle = {
  name: string;
  casks?: string[];
  formulas?: string[];
};

type Props = {
  casks: Soft[];
  formulas: Soft[];
  addedCasks: Soft[];
  addedFormulas: Soft[];
  onMultiAdd: (records: Soft[], type: SoftType) => void;
  onMultiRemove: (records: Soft[], type: SoftType) => void;
};

export function useBundle({
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
    (preset: Bundle): string[] => [
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
    (preset: Bundle): string[] => {
      const presetSoft = getSoft(preset);
      const addedSoft = getAddedSoft();
      return presetSoft.filter((entry) => !addedSoft.includes(entry));
    },
    [getSoft, getAddedSoft]
  );

  const getAction = useCallback(
    (preset: Bundle): Action => {
      const availableToAddCount = getAvailableToAdd(preset).length;
      return availableToAddCount > 0 ? Action.SUCCESS : Action.ERROR;
    },
    [getAvailableToAdd]
  );

  const getActionCallback = useCallback(
    (presetAction: Action) => {
      return presetAction === Action.SUCCESS ? onMultiAdd : onMultiRemove;
    },
    [onMultiAdd, onMultiRemove]
  );

  const getSoftPackagesFromBundle = useCallback(
    (preset: Bundle): [Soft[], Soft[]] => {
      const presetCasks = getCasks(preset.casks);
      const presetFormulas = getFormulas(preset.formulas);
      return [presetCasks, presetFormulas];
    },
    [getCasks, getFormulas]
  );

  const onClick = useCallback(
    (preset: Bundle) => {
      const presetAction = getAction(preset);
      const actionCallback = getActionCallback(presetAction);
      const [presetCasks, presetFormulas] = getSoftPackagesFromBundle(preset);
      return () => {
        actionCallback(presetCasks, SoftType.CASK);
        actionCallback(presetFormulas, SoftType.FORMULA);
      };
    },
    [getAction, getActionCallback, getSoftPackagesFromBundle]
  );

  const memoizedReturn: Return = useMemo(() => [onClick, FEATURED_BUNDLES], [
    onClick,
  ]);

  return memoizedReturn;
}

type Return = [(preset: Bundle) => () => void, Bundle[]];

const FEATURED_BUNDLES: Bundle[] = [
  {
    name: "Base bundle",
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
    name: "Social bundle",
    casks: ["slack", "discord", "rocket"],
    formulas: [],
  },
  {
    name: "Dev bundle",
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
    name: "JS bundle",
    casks: [],
    formulas: ["node", "yarn", "nvm"],
  },
  {
    name: "Java bundle",
    casks: [],
    formulas: ["openjdk"],
  },
];
