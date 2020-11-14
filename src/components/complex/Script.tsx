import React from "react";
import styled from "styled-components";

import { Soft } from "../../types";
import { FORMULAS_PANEL_LABEL, CASKS_PANEL_LABEL } from "../../utils/config";
import { Title } from "../base";

import { Code } from "../base";

type Props = {
  casks: Soft[];
  formulas: Soft[];
};

// TODO: fix this mess
export const Script = React.memo(({ casks, formulas }: Props) => (
  <ScriptWrapper>
    <Title># Script preview</Title>
    <Content>
      #!/usr/bin/env bash
      <br />
      <br />
      # Ask for the administrator password upfront
      <br />
      sudo -v
      <br />
      <br />
      # Keep-alive: update existing `sudo` time stamp until `.macos` has
      finished
      <br />
      while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2`
      {">"}`/dev/null &
      <br />
      <br /># {FORMULAS_PANEL_LABEL}
      <br />
      brew install (<br />
      {formulas.map((formula) => (
        <span key={formula.name}>
          &nbsp;&nbsp;{formula.name}
          <br />
        </span>
      ))}
      )
      <br />
      <br /># {CASKS_PANEL_LABEL}
      <br />
      brew cask install (<br />
      {casks.map((cask) => (
        <span key={cask.token}>
          &nbsp;&nbsp;{cask.token}
          <br />
        </span>
      ))}
      )
    </Content>
  </ScriptWrapper>
));

const Content = styled(Code)`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.material.input};
  border: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ScriptWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) =>
    `0px ${theme.paddings.sm}px ${theme.paddings.md}px ${theme.paddings.sm}px`};
  overflow-x: auto;
`;
