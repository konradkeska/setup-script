import React from "react";
import Sc from "styled-components";

import { Soft } from "types";
import { APP } from "config";

import { Code } from "components/atoms";

type Props = {
  casks: Soft[];
  formulas: Soft[];
};

// TODO: fix this mess someday
export const Script = React.memo(({ casks, formulas }: Props) => (
  <Wrapper>
    <Preview>
      #!/usr/bin/env bash
      <br />
      <br /> # Ask for the admin permission upfront
      <br />
      sudo -v
      <br />
      <br /> # Update existing permission until process is finished
      <br />
      while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2`
      {">"}`/dev/null &
      <br />
      <br /> # Install brew
      <br />
      /bin/bash -c "$(curl -fsSL
      https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
      <br />
      <br /> # {APP.FORMULAS_PANEL_HEADING} {APP.FORMULAS_PANEL_DESCRIPTION}
      <br />
      brew install
      <br />
      {formulas.map(({ name }, index) => (
        <BrewRecord key={index} token={name} />
      ))}
      <br /># {APP.CASKS_PANEL_HEADING} {APP.CASKS_PANEL_DESCRIPTION}
      <br />
      brew cask install
      <br />
      {casks.map(({ token, name }, index) => (
        <BrewRecord key={index} token={token || name} />
      ))}
      <br /># Reboot system in 60 seconds
      <br />
      shutdown -r +1
    </Preview>
  </Wrapper>
));

type BrewRecordProps = {
  token: string;
};

const BrewRecord = React.memo(({ token }: BrewRecordProps) => (
  <span>
    &nbsp;{token}
    <br />
  </span>
));

export const Wrapper = Sc.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) =>
    `0px ${theme.paddings.sm}px ${theme.paddings.md}px ${theme.paddings.sm}px`};
  overflow-x: auto;
`;

export const Preview = Sc(Code)`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.material.input};
  border: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;

  &:hover {
    user-select: unset;
  }
`;
