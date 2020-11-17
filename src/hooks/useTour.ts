import { useCallback, useState } from "react";

export function useTour() {
  const [wasUserGuided, setWasUserGuided] = useState(
    window.localStorage.getItem("wasGuided") === "true" || false
  );
  const [isTourOpen, setIsTourOpen] = useState(false);

  const setGuided = () => {
    window.localStorage.setItem("wasGuided", "true");
    setWasUserGuided(true);
  };

  const cancelTour = useCallback(() => {
    setGuided();
  }, []);

  const startTour = useCallback(() => {
    setTimeout(() => setIsTourOpen(true), 1000);
    setGuided();
  }, []);

  const onRequestClose = useCallback(() => {
    setIsTourOpen(false);
    setGuided();
  }, []);

  return {
    cancelTour,
    startTour,
    isTourOpen,
    onRequestClose,
    wasUserGuided,
  };
}
