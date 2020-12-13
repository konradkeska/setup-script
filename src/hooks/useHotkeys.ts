import { useCallback, useEffect, useMemo } from "react";

type Hotkeys = {
  getHotkeys: () => Record<KeyboardEvent["code"], () => void>;
  modifier?: "ctrlKey" | "shiftKey" | "shiftKey";
  event?: "keydown" | "keypress" | "keyup";
};

type Props = [hotkeys: Hotkeys, dependencies: unknown[]];

export function useHotkeys([
  { getHotkeys, modifier, event = "keydown" },
  dependencies,
]: Props) {
  const hotkeys = useMemo(getHotkeys, [getHotkeys, ...dependencies]);

  const onCallback = useCallback(
    (e: KeyboardEvent) => {
      return modifier
        ? e[modifier] && hotkeys[e.code]?.()
        : hotkeys[e.code]?.();
    },
    [hotkeys, modifier]
  );

  useEffect(() => {
    document.addEventListener(event, onCallback);
    return () => document.removeEventListener(event, onCallback);
  }, [event, onCallback]);
}
