import { useCallback, useEffect, useMemo, useState } from "react";
import { AxiosResponse } from "axios";

import { Soft, SoftType } from "api";

type Props = [() => Promise<AxiosResponse<Soft[]>>, SoftType];

export function useList([loader, type]: Props): Return {
  const [list, setList] = useState<Soft[]>([]);
  const [addedList, setAddedList] = useState<Soft[]>([]);
  const [focusedSoft, setFocusedSoft] = useState<Soft | null>(null);

  const loadData = useCallback(async () => {
    const data: AxiosResponse<Soft[]> = await loader();
    setList(formatResponse(data.data, type));
  }, [loader, type]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const addItem = useCallback(
    (record: Soft) => () => {
      if (!addedList.find((item) => item.name === record.name)) {
        setAddedList([record, ...addedList]);
        setList(list.filter((item) => item.name !== record.name));
      }
      setFocusedSoft(record);
    },
    [addedList, list]
  );

  const removeItem = useCallback(
    (record: Soft) => () => {
      setAddedList(addedList.filter((item) => item.name !== record.name));
      setList([record, ...list]);
      setFocusedSoft(record);
    },
    [addedList, list]
  );

  const addItems = useCallback(
    (records: Soft[]) => () => {
      const addableItems = getAddable([records, addedList]);
      const listWithoutItems = getListWithout([list, addableItems]);
      setAddedList([...addableItems, ...addedList]);
      setList(listWithoutItems);
    },
    [addedList, list]
  );

  const removeItems = useCallback(
    (records: Soft[]) => () => {
      const removableItems = getRemovable([records, addedList]);
      const addedListWithoutItems = getListWithout([addedList, removableItems]);
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

type Return = [
  Soft | null,
  Soft[],
  Soft[],
  (record: Soft) => () => void,
  (record: Soft) => () => void,
  (records: Soft[]) => () => void,
  (records: Soft[]) => () => void
];

const getAddable = ([itemsToAdd, addedItems]: [Soft[], Soft[]]) =>
  itemsToAdd.filter(
    (record) => !addedItems.map(({ name }) => name).includes(record.name)
  );

const getRemovable = ([itemsToRemove, addedItems]: [Soft[], Soft[]]) =>
  addedItems.filter((record) =>
    itemsToRemove.map(({ name }) => name).includes(record.name)
  );

const getListWithout = ([list, itemsToRemove]: [Soft[], Soft[]]) =>
  list.filter(
    (record) => !itemsToRemove.map(({ name }) => name).includes(record.name)
  );

const formatResponse = (records: SoftApiResponse[], type: SoftType): Soft[] =>
  records.map(({ name, ...record }) => ({
    ...record,
    name: typeof name === "string" ? name : name[0],
    type,
  }));

type SoftApiResponse = Omit<Soft, "name" | "type"> & {
  name: string | string[];
};
