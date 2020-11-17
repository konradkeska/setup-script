import React from "react";

import { Soft } from "../../../types";
import { FORMULAS_PANEL_LABEL, CASKS_PANEL_LABEL } from "../../../utils/config";

import { Wrapper } from "./Wrapper";
import { Preview } from "./Preview";

type Props = {
  casks: Soft[];
  formulas: Soft[];
  screenHeight: number;
};

// TODO: fix this mess
export const Script = React.memo(({ casks, formulas, screenHeight }: Props) => (
  <Wrapper screenHeight={screenHeight}>
    <Preview>
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
      <br />
      {
        '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"'
      }
      <br />
      <br /># {FORMULAS_PANEL_LABEL}
      <br />
      brew install (<br />
      {formulas.map(({ name }) => (
        <BrewRecord token={name} />
      ))}
      )
      <br />
      <br /># {CASKS_PANEL_LABEL}
      <br />
      brew cask install (<br />
      {casks.map(({ token }) => (
        <BrewRecord token={token} />
      ))}
      )
    </Preview>
  </Wrapper>
));

type BrewRecordProps = {
  token: string;
};

const BrewRecord = React.memo(({ token }: BrewRecordProps) => (
  <span>
    &nbsp;&nbsp;{token}
    <br />
  </span>
));
