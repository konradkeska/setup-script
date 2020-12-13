import React, { useCallback, useEffect, useRef } from "react";

import { useHotkeys } from "hooks";
import { Input } from "../atoms";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setLeftExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
};

export const Search = React.memo(
  ({ id, query, setQuery, setLeftExpanded }: Props) => {
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (query.length < 1) searchInputRef.current?.focus();
    }, [query]);

    useHotkeys([
      {
        getHotkeys: () => ({
          Backspace: () => searchInputRef.current?.focus(),
        }),
      },
      [searchInputRef],
    ]);

    const onQueryChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
        setLeftExpanded(e.currentTarget.value.length > 0);
      },
      [setQuery, setLeftExpanded]
    );

    return (
      <Input
        id={id}
        aria-label="search"
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
