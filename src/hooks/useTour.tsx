import React, { useCallback, useState } from "react";
import { DefaultTheme } from "styled-components";
import Tour from "reactour";

import { Bar } from "../components/common";
import { getTourSteps } from "../utils/tour";

type Props = {
  theme: DefaultTheme;
};

type Returns = {
  wasUserGuided: boolean;
  GuideTourBar: () => JSX.Element;
  GuideTour: () => JSX.Element;
};

export function useTour({ theme }: Props): Returns {
  const [wasUserGuided, setWasUserGuided] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const cancelGuide = useCallback(() => {
    setWasUserGuided(true);
  }, []);

  const startGuide = useCallback(() => {
    setTimeout(() => setIsTourOpen(true), 1000);
    setWasUserGuided(true);
  }, []);

  const GuideTourBar = () => (
    <Bar
      label={"Are you up for a quick tour?"}
      btnLabel={"Ok"}
      onClose={cancelGuide}
      onConfirm={startGuide}
    />
  );

  const GuideTour = () => (
    <Tour
      steps={getTourSteps(theme)}
      onRequestClose={() => {
        setIsTourOpen(false);
        setWasUserGuided(true);
      }}
      isOpen={isTourOpen}
      onAfterOpen={() => (document.body.style.overflowY = "hidden")}
      onBeforeClose={() => (document.body.style.overflowY = "auto")}
      accentColor={theme.colors.primary.purple}
      rounded={theme.radiuses.md}
      showNavigation={false}
      showNavigationNumber={false}
      disableFocusLock
    />
  );

  return {
    wasUserGuided,
    GuideTourBar,
    GuideTour,
  };
}
