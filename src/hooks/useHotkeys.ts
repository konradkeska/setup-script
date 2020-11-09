import { useCallback, useEffect, useMemo } from "react";

export function useHotkeys(
  getHotkeys: () => Record<string, () => void>,
  dependencies: unknown[],
  event: "keydown" | "keypress" | "keyup" = "keydown"
): void {
  const hotkeys = useMemo(getHotkeys, dependencies);

  const onCallback = useCallback(
    ({ code }: KeyboardEvent) => hotkeys[code]?.(),
    [hotkeys]
  );

  useEffect(() => {
    document.addEventListener(event, onCallback);
    return () => document.removeEventListener(event, onCallback);
  }, [onCallback]);
}
