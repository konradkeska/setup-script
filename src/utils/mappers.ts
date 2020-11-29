import { DefaultTheme } from "styled-components";

import {
  CaskDetails,
  Details,
  FormulaDetails,
  Soft,
  SoftApiResponse,
  SoftType,
} from "types";
import { FontColor, MaterialColor, PrimaryColor } from "types";

const isOfTypePrimaryColor = (key: string): key is PrimaryColor =>
  Object.values(PrimaryColor).includes(key as PrimaryColor);

const isOfTypeMaterialColor = (key: string): key is MaterialColor =>
  Object.values(MaterialColor).includes(key as MaterialColor);

const isOfTypeFontColor = (key: string): key is FontColor =>
  Object.values(FontColor).includes(key as FontColor);

const toColorString = (
  key: PrimaryColor | FontColor | MaterialColor,
  theme: DefaultTheme
) => {
  if (isOfTypePrimaryColor(key)) return theme.colors.primary[key];
  if (isOfTypeMaterialColor(key)) return theme.colors.material[key];
  if (isOfTypeFontColor(key)) return theme.colors.font[key];
  return "unset";
};

const hasQueryMatch = (query: string, value?: string) =>
  value?.toLowerCase().includes(query.toLowerCase()) || false;

const hasIdentifierMatch = (query: string, item: Soft) =>
  query.length > 1 && hasQueryMatch(query, toSoftId(item));

const toMatchingRecords = (query: string, records: Soft[]) =>
  query.length > 1
    ? records.filter((item: Soft) => hasIdentifierMatch(query, item))
    : [];

const toSoft = (records: SoftApiResponse[], type: SoftType): Soft[] =>
  records.map(({ name, ...record }) => ({
    ...record,
    name: typeof name === "string" ? name : name[0],
    type,
  }));

const toSoftType = (soft?: Soft | null) => soft?.type || SoftType.CASK;

const toSoftId = (soft: Soft) => {
  return toSoftType(soft) === SoftType.CASK
    ? soft?.token || soft.name
    : soft.name;
};

const toAddableItems = ([itemsToAdd, list]: [Soft[], Soft[]]) =>
  itemsToAdd.filter((record) => !list.map(toSoftId).includes(toSoftId(record)));

const toRemovableItems = ([itemsToRemove, list]: [Soft[], Soft[]]) =>
  list.filter((record) =>
    itemsToRemove.map(toSoftId).includes(toSoftId(record))
  );

const toListWithout = ([itemsToRemove, list]: [Soft[], Soft[]]) =>
  list.filter(
    (record) => !itemsToRemove.map(toSoftId).includes(toSoftId(record))
  );

const toDetails = (response: CaskDetails | FormulaDetails): Details => ({
  name: typeof response.name !== "string" ? response.name[0] : response.name,
  desc: response.desc,
  homepage: response.homepage,
  conflicts: response.conflicts_with?.length || 0,
  installs: Object.values(response.analytics.install["365d"])?.[0] || 0,
  version: (response as CaskDetails).version
    ? (response as CaskDetails).version
    : (response as FormulaDetails).versions.stable,
});

export {
  toColorString,
  toMatchingRecords,
  toSoft,
  toSoftType,
  toAddableItems,
  toRemovableItems,
  toListWithout,
  toSoftId,
  toDetails,
};
