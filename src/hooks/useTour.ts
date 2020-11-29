import { useCallback, useMemo, useState } from "react";
import { getWasUserGuided } from "utils";

type Return = {
  isTourOpen: boolean;
  wasUserGuided: boolean;
  cancelTour: () => void;
  startTour: () => void;
  onRequestClose: () => void;
};

export function useTour(): Return {
  const [wasUserGuided, setWasUserGuided] = useState(getWasUserGuided());
  const [isTourOpen, setIsTourOpen] = useState(false);

  const setGuided = useCallback(() => {
    window.localStorage.setItem("wasGuided", "true");
    setWasUserGuided(true);
  }, []);

  const startTour = useCallback(() => {
    setTimeout(() => setIsTourOpen(true), 1000);
    setGuided();
  }, [setGuided]);

  const onRequestClose = useCallback(() => {
    setIsTourOpen(false);
    setGuided();
  }, [setGuided]);

  const memoizedReturn: Return = useMemo(
    () => ({
      isTourOpen,
      wasUserGuided,
      cancelTour: setGuided,
      startTour,
      onRequestClose,
    }),
    [isTourOpen, wasUserGuided, setGuided, startTour, onRequestClose]
  );

  return memoizedReturn;
}
