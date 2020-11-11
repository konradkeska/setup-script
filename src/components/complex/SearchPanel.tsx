import React from "react";
import styled from "styled-components";

import { Soft, Setting } from "../../types";
import { prepareResults } from "../../utils";
import { Wrapper } from "../base";
import { Panel } from "./Panel";

export function SearchPanel({
  addCask,
  addFormula,
  addSetting,
  query,
  casks,
  formulas,
  settings,
  wasUserGuided,
  count = 7,
}: {
  addCask: (item: Soft) => () => void;
  addFormula: (item: Soft) => () => void;
  addSetting: (item: Setting) => () => void;
  query: string;
  casks: Soft[];
  formulas: Soft[];
  settings: Setting[];
  wasUserGuided: boolean;
  count?: number;
}) {
  return (
    <StyledDiv count={count} wasUserGuided={wasUserGuided}>
      <Wrapper alignItems="flex-start" mt={wasUserGuided ? "76px" : "106px"}>
        <Panel
          title="casks"
          items={prepareResults(query, casks)}
          onClick={addCask}
          count={count}
          width="calc(66.666% - 12px)"
          mt
        />
        <Panel
          title="formulas"
          items={prepareResults(query, formulas)}
          onClick={addFormula}
          count={count}
          width="calc(33.333% - 12px)"
          mt
        />
        <Panel
          title="settings"
          items={prepareResults(query, settings) as any}
          onClick={addSetting as any}
          count={count}
          width="100%"
          mt
        />
      </Wrapper>
    </StyledDiv>
  );
}

const StyledDiv = styled.div<{
  count: number;
  wasUserGuided: boolean;
}>`
  z-index: 4;
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.bg2};
  box-shadow: ${({ theme }) => theme.shadows.searchPanel};
`;
