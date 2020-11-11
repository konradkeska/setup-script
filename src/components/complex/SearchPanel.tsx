import React from "react";
import styled from "styled-components";

import { Soft, Setting } from "../../types";
import { includesQuery } from "../../utils";
import { Wrapper } from "../base";
import { Panel } from "./Panel/Panel";

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
        alignItems="flex-start"
        mt={wasUserGuided ? "80px" : "108px"}
        p="0px"
      >
        <Panel
          title="casks"
          items={includesQuery(query, casks)}
          onClick={addCask}
          width="calc(66.666% - 12px)"
          bgColor="bg3"
          mt={!wasUserGuided}
        />
        <Panel
          title="formulas"
          items={includesQuery(query, formulas)}
          onClick={addFormula}
          width="calc(33.333% - 12px)"
          bgColor="bg3"
          mt={!wasUserGuided}
        />
        <Panel
          title="settings"
          items={includesQuery(query, settings) as any}
          onClick={addSetting as any}
          width="100%"
          bgColor="bg3"
        />
      </Wrapper>
    </Aside>
  )
);

const Aside = styled.aside`
  z-index: 4;
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.bg2};
  box-shadow: ${({ theme }) => theme.shadows.searchPanel};
`;
