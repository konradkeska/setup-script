import { RECORD_LIMIT } from "./constants";
import { IBaseCask, IBaseFormula } from "./types";

const includesQuery = (query: string) => (item: IBaseFormula | IBaseCask) =>
  (query && item.name.toLowerCase().includes(query.toLowerCase())) || false;

const prepareResults = (query: string, records: any[]) =>
  records.filter(includesQuery(query)).slice(0, RECORD_LIMIT);

export { prepareResults };
