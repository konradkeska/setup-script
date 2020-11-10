import {
  AddToListActionParams,
  ListActionParams,
  RequiredListFields,
  Soft,
} from "./types";

const RECORD_LIMIT: number = 100;

const includesQuery = (query: string) => (item: Soft) =>
  (query?.length > 1 &&
    item.name.toLowerCase().includes(query.toLowerCase())) ||
  false;

const prepareResults = (query: string, records: any[]) =>
  records.filter(includesQuery(query)).slice(0, RECORD_LIMIT);

const truncate = (value: string, limit = 18) =>
  value.length > limit ? `${value.slice(0, limit - 3)}...` : value;

function addToListFactory<T extends RequiredListFields>({
  list,
  setList,
  setQuery,
}: AddToListActionParams<T>) {
  return (record: T) => () => {
    if (!list.find((item) => item.name === record.name)) {
      setList([...list, record]);
      setQuery("");
    }
  };
}

function removeFromListFactory<T extends RequiredListFields>({
  list,
  setList,
}: ListActionParams<T>) {
  return (record: T) => () =>
    setList(list.filter((item) => item.name !== record.name));
}

export { prepareResults, truncate, addToListFactory, removeFromListFactory };
