import { BaseFields, Filterable, Setting, Soft } from "./types";

const includesQuery = <T extends BaseFields>(query: string, records: T[]) =>
  records.filter(
    (item: T) =>
      (query?.length > 1 &&
        item.name.toLowerCase().includes(query.toLowerCase())) ||
      false
  );

const truncate = (value: string, limit = 18) =>
  value.length > limit ? `${value.slice(0, limit - 3)}...` : value;

const matches = (record: Soft | Setting, property: Filterable = "name") => (
  item: Soft | Setting
): boolean => item[property] === record[property];

const notMatches = (record: Soft | Setting, property: Filterable = "name") => (
  item: Soft | Setting
): boolean => item[property] !== record[property];

export { includesQuery, truncate, matches, notMatches };
