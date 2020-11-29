import { useCallback, useEffect, useMemo, useState } from "react";
import { AxiosResponse } from "axios";

import { Soft, SoftType } from "types";
import {
  toSoft,
  toAddableItems,
  toListWithout,
  toRemovableItems,
  toSoftId,
} from "utils";

type Props = [() => Promise<AxiosResponse<Soft[]>>, SoftType];

type Return = [
  Soft | null,
  Soft[],
  Soft[],
  (record: Soft) => () => void,
  (record: Soft) => () => void,
  (records: Soft[]) => () => void,
  (records: Soft[]) => () => void
];

export function useList([loader, type]: Props): Return {
  const [list, setList] = useState<Soft[]>([]);
  const [addedList, setAddedList] = useState<Soft[]>([]);
  const [focusedSoft, setFocusedSoft] = useState<Soft | null>(null);

  const loadData = useCallback(async () => {
    try {
      const data: AxiosResponse<Soft[]> = await loader();
      setList(toSoft(data.data, type));
    } catch (error) {
      console.error(error);
    }
  }, [loader, type]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const addItem = useCallback(
    (record: Soft) => () => {
      if (!addedList.find((item) => toSoftId(item) === toSoftId(record))) {
        setAddedList([record, ...addedList]);
        setList(list.filter((item) => toSoftId(item) !== toSoftId(record)));
      }
      setFocusedSoft(record);
    },
    [addedList, list]
  );

  const removeItem = useCallback(
    (record: Soft) => () => {
      if (!list.find((item) => toSoftId(item) === toSoftId(record))) {
        setAddedList(
          addedList.filter((item) => toSoftId(item) !== toSoftId(record))
        );
        setList([record, ...list]);
      }
      setFocusedSoft(record);
    },
    [addedList, list]
  );

  const addItems = useCallback(
    (records: Soft[]) => () => {
      const addableItems = toAddableItems([records, addedList]);
      const listWithoutItems = toListWithout([addableItems, list]);
      setAddedList([...addableItems, ...addedList]);
      setList(listWithoutItems);
    },
    [addedList, list]
  );

  const removeItems = useCallback(
    (records: Soft[]) => () => {
      const removableItems = toRemovableItems([records, addedList]);
      const addedListWithoutItems = toListWithout([addedList, removableItems]);
      setAddedList(addedListWithoutItems);
      setList([...removableItems, ...list]);
    },
    [addedList, list]
  );

  const memoizedReturn: Return = useMemo(
    () => [
      focusedSoft,
      list,
      addedList,
      addItem,
      removeItem,
      addItems,
      removeItems,
    ],
    [focusedSoft, list, addedList, addItem, removeItem, addItems, removeItems]
  );

  return memoizedReturn;
}
