import { useCallback, useMemo, useState } from "react";
import { DefaultTheme } from "styled-components";

import { getTourSteps } from "../utils/tour";

type Props = {
  theme: DefaultTheme;
};

export function useTour({ theme }: Props) {
  const [wasUserGuided, setWasUserGuided] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const cancelTour = useCallback(() => {
    setWasUserGuided(true);
  }, []);

  const startTour = useCallback(() => {
    setTimeout(() => setIsTourOpen(true), 1000);
    setWasUserGuided(true);
  }, []);

  const onRequestClose = useCallback(() => {
    setIsTourOpen(false);
    setWasUserGuided(true);
  }, []);

  const steps = useMemo(() => getTourSteps(theme), [theme]);

  return {
    cancelTour,
    startTour,
    isTourOpen,
    steps,
    onRequestClose,
    wasUserGuided,
  };
}
