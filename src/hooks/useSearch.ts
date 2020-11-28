import { useState, useMemo } from "react";

import { Soft } from "api";
import { sort } from "utils";

type Props = {
  records: Soft[];
  sortFunc?: (a: Soft, b: Soft) => number;
};

export function useSearch({ records, sortFunc = byName }: Props): Return {
  const [query, setQuery] = useState<string>("");

  const results: Soft[] = useMemo(() => getMatchingRecords(query, records), [
    query,
    records,
  ]);

  const sortedResults: Soft[] = useMemo(() => sort(results, sortFunc), [
    results,
    sortFunc,
  ]);

  const memoizedReturn: Return = useMemo(
    () => [query, setQuery, sortedResults],
    [query, sortedResults]
  );

  return memoizedReturn;
}

type Return = [string, React.Dispatch<React.SetStateAction<string>>, Soft[]];

const hasQueryMatch = (query: string, value?: string) =>
  value?.toLowerCase().includes(query.toLowerCase()) || false;

const hasIdentifierMatch = (query: string, item: Soft) =>
  query.length > 1 &&
  (hasQueryMatch(query, item.name) || hasQueryMatch(query, item.token));

const getMatchingRecords = (query: string, records: Soft[]) =>
  query.length > 1
    ? records.filter((item: Soft) => hasIdentifierMatch(query, item))
    : [];

const byName = (a: Soft, b: Soft) =>
  a.name.localeCompare(b.name, "en", { sensitivity: "base" });
