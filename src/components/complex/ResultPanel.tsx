import React from "react";

import { Theme } from "../../themes";
import { BaseParams, Setting } from "../../types";
import { Wrapper } from "../base";
import { Panel } from "./Panel";

export function ResultPanel({
  theme,
  wasUserGuided,
  addedCasks,
  removeCask,
  addedFormulas,
  removeFormula,
  addedSettings,
  removeSetting,
  count = 7,
}: {
  theme: Theme;
  wasUserGuided: boolean;
  addedCasks: BaseParams[];
  addedFormulas: BaseParams[];
  addedSettings: Setting[];
  removeCask: (item: BaseParams) => () => void;
  removeFormula: (item: BaseParams) => () => void;
  removeSetting: (item: Setting) => () => void;
  count?: number;
}) {
  return (
    <Wrapper
      theme={theme}
      alignItems="flex-start"
      mt={wasUserGuided ? "76px" : "106px"}
      p="0px"
    >
      <Panel
        theme={theme}
        title="added casks"
        items={addedCasks}
        onClick={removeCask}
        operation="remove"
        width="calc(66.666% - 12px)"
        count={count}
      />
      <Panel
        theme={theme}
        title="added formulas"
        items={addedFormulas}
        onClick={removeFormula}
        operation="remove"
        width="calc(33.333% - 12px)"
        count={count}
      />
      <Panel
        theme={theme}
        title="added settings"
        items={addedSettings as any}
        onClick={removeSetting as any}
        operation="remove"
        count={count}
        mt
      />
    </Wrapper>
  );
}
