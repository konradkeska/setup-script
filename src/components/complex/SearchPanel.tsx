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
  max-height: ${({ wasUserGuided }) =>
    wasUserGuided ? `calc(606px + 60px)` : `calc(606px + 46px + 106px)`};
  background-color: ${({ theme }) => theme.colors.bg2};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
