import React from "react";

import { Soft } from "types";
import {
  CASKS_PANEL_HEADING,
  CASKS_PANEL_DESCRIPTION,
  FORMULAS_PANEL_HEADING,
  FORMULAS_PANEL_DESCRIPTION,
} from "components/config";

import { Wrapper } from "./Wrapper";
import { Preview } from "./Preview";

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
      <br /> # Ask for the administrator password upfront
      <br />
      sudo -v
      <br />
      <br /> # Update existing `sudo` permission until process is finished
      <br />
      while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2`
      {">"}`/dev/null &
      <br />
      <br /> # Install brew
      <br />
      {
        '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"'
      }
      <br />
      <br /> # {FORMULAS_PANEL_HEADING} {FORMULAS_PANEL_DESCRIPTION}
      <br />
      brew install (<br />
      {formulas.map(({ name }, index) => (
        <BrewRecord key={index} token={name} />
      ))}
      ) &
      <br />
      <br /># {CASKS_PANEL_HEADING} {CASKS_PANEL_DESCRIPTION}
      <br />
      brew cask install (<br />
      {casks.map(({ token, name }, index) => (
        <BrewRecord key={index} token={token || name} />
      ))}
      ) &
      <br />
      <br /># Reboot system in 1 minute
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
    &nbsp;&nbsp;{token}
    <br />
  </span>
));
