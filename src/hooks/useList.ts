import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { Soft, SoftType } from "types";
import { formatResponse } from "utils";

type Props = {
  loader: () => Promise<AxiosResponse<Soft[]>>;
  type: SoftType;
};

type Return = [
  Soft[],
  Soft[],
  (record: Soft) => () => void,
  (record: Soft) => () => void,
  (records: Soft[]) => () => void,
  (records: Soft[]) => () => void
];

export function useList({ loader, type }: Props): Return {
  const [list, setList] = useState<Soft[]>([]);
  const [addedList, setAddedList] = useState<Soft[]>([]);

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
    },
    [addedList, list]
  );

  const removeItem = useCallback(
    (record: Soft) => () => {
      setAddedList(addedList.filter((item) => item.name !== record.name));
      setList([record, ...list]);
    },
    [addedList, list]
  );

  const addItems = useCallback(
    (items: Soft[]) => () => {
      const addableItems = getAddable([items, addedList]);
      const listWithoutItems = getListWithout([list, addableItems]);
      setAddedList([...addableItems, ...addedList]);
      setList(listWithoutItems);
    },
    [addedList, list]
  );

  const removeItems = useCallback(
    (items: Soft[]) => () => {
      const removableItems = getRemovable([items, addedList]);
      const addedListWithoutItems = getListWithout([addedList, removableItems]);
      setAddedList(addedListWithoutItems);
      setList([...removableItems, ...list]);
    },
    [addedList, list]
  );

  return [list, addedList, addItem, removeItem, addItems, removeItems];
}

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
    ({ name }) => !itemsToRemove.map(({ name }) => name).includes(name)
  );
