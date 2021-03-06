import { useMemo, useState } from "react";

import { Soft } from "types";
import { sort, toMatchingRecords } from "utils";

type Props = {
  records: Soft[];
  sortFunc?: (a: Soft, b: Soft) => number;
};

type Return = [
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  sortedResults: Soft[]
];

export function useSearch({ records, sortFunc = byNameAsc }: Props): Return {
  const [query, setQuery] = useState("");

  const results = toMatchingRecords(query, records);

  const sortedResults = sort(results, sortFunc);

  const memoizedReturn: Return = useMemo(
    () => [query, setQuery, sortedResults],
    [query, sortedResults]
  );

  return memoizedReturn;
}

const byNameAsc = (a: Soft, b: Soft) =>
  a.name.localeCompare(b.name, "en", { sensitivity: "base" });
