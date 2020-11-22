import { useState, useMemo } from "react";

import { Soft } from "types";
import { includesQuery, sort } from "utils";

type Props = {
  casks: Soft[];
  formulas: Soft[];
};

type Return = [string, React.Dispatch<React.SetStateAction<string>>, Soft[]];

export function useSearch({ casks, formulas }: Props): Return {
  const [query, setQuery] = useState<string>("");
  const hasValidQuery = useMemo(() => query?.length > 1, [query]);

  const caskResults: Soft[] = useMemo(
    () => (hasValidQuery ? includesQuery(query, casks) : []),
    [hasValidQuery, query, casks]
  );

  const formulaeResults: Soft[] = useMemo(
    () => (hasValidQuery ? includesQuery(query, formulas) : []),
    [hasValidQuery, query, formulas]
  );

  const sortedResults: Soft[] = useMemo(
    () =>
      sort([...caskResults, ...formulaeResults], (a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      ),
    [caskResults, formulaeResults]
  );

  const memoizedReturn: Return = useMemo(
    () => [query, setQuery, sortedResults],
    [query, setQuery, sortedResults]
  );

  return memoizedReturn;
}
