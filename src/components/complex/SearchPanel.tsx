import React from "react";
import styled from "styled-components";

import {
  CASKS_PANEL_LABEL,
  FORMULAS_PANEL_LABEL,
  SETTINGS_PANEL_LABEL,
} from "../../utils/config";
import { Soft, Setting } from "../../types";
import { includesQuery } from "../../utils/helpers";
import { Wrapper } from "../base";

import { Panel } from "./Panel";

type Props = {
  wasUserGuided: boolean;
  query: string;
  casks: Soft[];
  formulas: Soft[];
  settings: Setting[];
  addCask: (item: Soft) => () => void;
  addFormula: (item: Soft) => () => void;
  addSetting: (item: Setting) => () => void;
};

export const SearchPanel = React.memo(
  ({
    wasUserGuided,
    query,
    casks,
    formulas,
    settings,
    addCask,
    addFormula,
    addSetting,
  }: Props) => (
    <Aside>
      <Wrapper
        justify="flex-start"
        align="flex-start"
        direction="column"
        mt={wasUserGuided ? "80px" : "108px"}
        p="0px"
      >
        <Panel
          id="found-casks"
          title={CASKS_PANEL_LABEL}
          items={includesQuery(query, casks)}
          onClick={addCask}
          bgColor="input"
          mt={!wasUserGuided}
        />
        <Panel
          id="found-formulas"
          title={FORMULAS_PANEL_LABEL}
          items={includesQuery(query, formulas)}
          onClick={addFormula}
          bgColor="input"
        />
        <Panel
          id="found-settings"
          title={SETTINGS_PANEL_LABEL}
          items={includesQuery(query, settings) as any}
          onClick={addSetting as any}
          bgColor="input"
        />
      </Wrapper>
    </Aside>
  )
);

const Aside = styled.aside`
  z-index: 4;
  width: 400px;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.material.overlay};
  box-shadow: ${({ theme }) => theme.shadows.base};
`;
