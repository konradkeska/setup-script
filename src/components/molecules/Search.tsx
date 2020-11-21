import React, { useCallback, useEffect, useRef } from "react";

import { useHotkeys } from "hooks";
import { Input } from "../atoms";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setLeftExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Search = React.memo(
  ({ query, setQuery, setLeftExpanded }: Props) => {
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (query.length < 1) searchInputRef.current?.focus();
    }, [query]);

    useHotkeys(
      () => ({
        Backspace: () => searchInputRef.current?.focus(),
      }),
      []
    );

    const onQueryChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
        setLeftExpanded(e.currentTarget.value.length > 0);
      },
      [setQuery, setLeftExpanded]
    );

    return (
      <Input
        id="search-input"
        ref={searchInputRef}
        placeholder="Find software.."
        type="text"
        value={query}
        onChange={onQueryChange}
        autoComplete="off"
      />
    );
  }
);
