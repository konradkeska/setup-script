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
    (bundle: Bundle): string[] => [
      ...(bundle.casks || []),
      ...(bundle.formulas || []),
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
    (bundle: Bundle): string[] => {
      const bundleSoft = getSoft(bundle);
      const addedSoft = getAddedSoft();
      return bundleSoft.filter((entry) => !addedSoft.includes(entry));
    },
    [getSoft, getAddedSoft]
  );

  const getAction = useCallback(
    (bundle: Bundle): Action => {
      const availableToAddCount = getAvailableToAdd(bundle).length;
      return availableToAddCount > 0 ? Action.SUCCESS : Action.ERROR;
    },
    [getAvailableToAdd]
  );

  const getActionCallback = useCallback(
    (bundleAction: Action) => {
      return bundleAction === Action.SUCCESS ? onMultiAdd : onMultiRemove;
    },
    [onMultiAdd, onMultiRemove]
  );

  const getSoftPackagesFrom = useCallback(
    (bundle: Bundle): [Soft[], Soft[]] => {
      const casksBundle = getCasks(bundle.casks);
      const formulasBundle = getFormulas(bundle.formulas);
      return [casksBundle, formulasBundle];
    },
    [getCasks, getFormulas]
  );

  const onClick = useCallback(
    (bundle: Bundle) => {
      const bundleAction = getAction(bundle);
      const actionCallback = getActionCallback(bundleAction);
      const [casksBundle, formulasBundle] = getSoftPackagesFrom(bundle);
      return () => {
        actionCallback(casksBundle, SoftType.CASK);
        actionCallback(formulasBundle, SoftType.FORMULA);
      };
    },
    [getAction, getActionCallback, getSoftPackagesFrom]
  );

  const memoizedReturn: Return = useMemo(() => [onClick, FEATURED_BUNDLES], [
    onClick,
  ]);

  return memoizedReturn;
}

type Return = [(bundle: Bundle) => () => void, Bundle[]];

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
