import React from "react";

import { Soft, Setting } from "../../types";
import { Wrapper } from "../base";
import { Panel } from "./Panel";

export function ResultPanel({
  wasUserGuided,
  addedCasks,
  removeCask,
  addedFormulas,
  removeFormula,
  addedSettings,
  removeSetting,
  count = 7,
}: {
  wasUserGuided: boolean;
  addedCasks: Soft[];
  addedFormulas: Soft[];
  addedSettings: Setting[];
  removeCask: (item: Soft) => () => void;
  removeFormula: (item: Soft) => () => void;
  removeSetting: (item: Setting) => () => void;
  count?: number;
}) {
  return (
    <Wrapper
      alignItems="flex-start"
      mt={wasUserGuided ? "76px" : "106px"}
      p="0px"
    >
      <Panel
        title="added casks"
        items={addedCasks}
        onClick={removeCask}
        operation="remove"
        width="calc(66.666% - 12px)"
        count={count}
      />
      <Panel
        title="added formulas"
        items={addedFormulas}
        onClick={removeFormula}
        operation="remove"
        width="calc(33.333% - 12px)"
        count={count}
      />
      <Panel
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
