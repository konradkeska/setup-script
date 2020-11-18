import React from "react";
import Tour from "reactour";
import { DefaultTheme } from "styled-components";

import { useTour } from "hooks";
import { Bar } from "components/molecules";
import { getSteps } from "./config";

type Props = {
  theme: DefaultTheme;
};

export const UsageTour = React.memo(({ theme }: Props) => {
  const steps = getSteps(theme);
  const {
    cancelTour,
    startTour,
    isTourOpen,
    onRequestClose,
    wasUserGuided,
  } = useTour();
  return (
    <>
      {!wasUserGuided && (
        <Bar
          label="Are you up for a quick tour?"
          btnLabel="Ok"
          onClose={cancelTour}
          onConfirm={startTour}
        />
      )}
      <Tour
        steps={steps}
        onRequestClose={onRequestClose}
        isOpen={isTourOpen}
        onAfterOpen={() => (document.body.style.overflowY = "hidden")}
        onBeforeClose={() => (document.body.style.overflowY = "auto")}
        accentColor={theme.colors.primary.purple}
        rounded={theme.radiuses.md}
        showNavigation={false}
        showNavigationNumber={false}
        disableFocusLock
      />
    </>
  );
});
