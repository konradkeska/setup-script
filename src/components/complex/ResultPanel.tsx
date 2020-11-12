import React from "react";

import {
  CASKS_PANEL_LABEL,
  FORMULAS_PANEL_LABEL,
  SETTINGS_PANEL_LABEL,
} from "../../utils/config";
import { Soft, Setting } from "../../types";
import { Wrapper } from "../base";

import { Panel } from "./Panel";

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
    <Wrapper align="flex-start" mt={wasUserGuided ? "80px" : "108px"} p="0px">
      <Panel
        id="added-casks"
        title={`Added ${CASKS_PANEL_LABEL}`}
        items={casks}
        onClick={removeCask}
        operation="remove"
      />
      <Panel
        id="added-formulas"
        title={`Added ${FORMULAS_PANEL_LABEL}`}
        items={formulas}
        onClick={removeFormula}
        operation="remove"
      />
      <Panel
        id="added-settings"
        title={`Added ${SETTINGS_PANEL_LABEL}`}
        items={settings as any}
        onClick={removeSetting as any}
        operation="remove"
      />
    </Wrapper>
  )
);
