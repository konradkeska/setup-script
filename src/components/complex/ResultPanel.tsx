import React from "react";

import { Soft, Setting } from "../../types";
import { Wrapper } from "../base";
import { Panel } from "./Panel/Panel";

type Props = {
  wasUserGuided: boolean;
  casks: Soft[];
  formulas: Soft[];
  settings: Setting[];
  removeCask: (item: Soft) => () => void;
  removeFormula: (item: Soft) => () => void;
  removeSetting: (item: Setting) => () => void;
};

export const ResultPanel = React.memo(
  ({
    wasUserGuided,
    casks,
    formulas,
    settings,
    removeCask,
    removeFormula,
    removeSetting,
  }: Props) => (
    <Wrapper
      alignItems="flex-start"
      mt={wasUserGuided ? "80px" : "108px"}
      p="0px"
    >
      <Panel
        title="added casks"
        items={casks}
        onClick={removeCask}
        operation="remove"
        width="calc(66.666% - 12px)"
      />
      <Panel
        title="added formulas"
        items={formulas}
        onClick={removeFormula}
        operation="remove"
        width="calc(33.333% - 12px)"
      />
      <Panel
        title="added settings"
        items={settings as any}
        onClick={removeSetting as any}
        operation="remove"
      />
    </Wrapper>
  )
);
