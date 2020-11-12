import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { BaseFields } from "../types";
import { formatResponse } from "../utils/helpers";

type Return<T> = [
  T[],
  T[],
  (record: T) => () => void,
  (record: T) => () => void
];

export function useList<T extends BaseFields>(
  loader: () => Promise<AxiosResponse<T[]>> | T[],
  asSettings: boolean = false
): Return<T> {
  const [list, setList] = useState<T[]>([]);
  const [addedList, setAddedList] = useState<T[]>([]);

  const loadData = useCallback(async () => {
    const data = await loader();
    // fix someday 🍭
    asSettings
      ? setList(data as T[])
      : setList(
          formatResponse((data as AxiosResponse<T[]>).data as any) as any
        );
  }, [loader, asSettings]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const addRecord = useCallback(
    (record: T) => () => {
      if (!addedList.find((item) => item.name === record.name)) {
        setAddedList([record, ...addedList]);
        setList(list.filter((item) => item.name !== record.name));
      }
    },
    [addedList, list]
  );

  const removeRecord = useCallback(
    (record: T) => () => {
      setAddedList(addedList.filter((item) => item.name !== record.name));
      setList([record, ...list]);
    },
    [addedList, list]
  );

  return [list, addedList, addRecord, removeRecord];
}
