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
  (record: Soft) => () => void
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

  const addRecord = useCallback(
    (record: Soft) => () => {
      if (!addedList.find((item) => item.name === record.name)) {
        setAddedList([record, ...addedList]);
        setList(list.filter((item) => item.name !== record.name));
      }
    },
    [addedList, list]
  );

  const removeRecord = useCallback(
    (record: Soft) => () => {
      setAddedList(addedList.filter((item) => item.name !== record.name));
      setList([record, ...list]);
    },
    [addedList, list]
  );

  return [list, addedList, addRecord, removeRecord];
}
