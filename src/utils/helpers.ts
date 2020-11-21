import { DefaultTheme } from "styled-components";

import {
  Soft,
  SoftType,
  FontColors,
  MaterialColors,
  PrimaryColors,
  SoftApiRecord,
} from "types";

const formatResponse = (records: SoftApiRecord[], type: SoftType): Soft[] =>
  records.map(({ name, ...record }) => ({
    ...record,
    name: typeof name === "string" ? name : name[0],
    type,
  }));

const includesQuery = (query: string, records: Soft[]) =>
  records.filter(
    (item: Soft) =>
      (query?.length > 1 &&
        (item.name?.toLowerCase().includes(query.toLowerCase()) ||
          item.token?.toLowerCase().includes(query.toLowerCase()))) ||
      false
  );

const sort = <T>(arr: T[], callback: (a: T, b: T) => number) =>
  [...arr].sort(callback);

const truncate = (value: string, limit = 10) =>
  value.length > limit ? `${value.slice(0, limit - 2)}..` : value;

const isOfTypePrimaryColors = (key: string): key is PrimaryColors =>
  Object.values(PrimaryColors).includes(key as PrimaryColors);

const isOfTypeMaterialColors = (key: string): key is MaterialColors =>
  Object.values(MaterialColors).includes(key as MaterialColors);

const isOfTypeFontColors = (key: string): key is FontColors =>
  Object.values(FontColors).includes(key as FontColors);

const toColorString = (
  key: PrimaryColors | FontColors | MaterialColors,
  theme: DefaultTheme
) => {
  if (isOfTypePrimaryColors(key)) return theme.colors.primary[key];
  if (isOfTypeMaterialColors(key)) return theme.colors.material[key];
  if (isOfTypeFontColors(key)) return theme.colors.font[key];
  return "unset";
};

const setNativeValue = (element: HTMLElement, value: string | number) => {
  const { set: valueSetter } =
    Object.getOwnPropertyDescriptor(element, "value") || {};
  const prototype = Object.getPrototypeOf(element);
  const { set: prototypeValueSetter } =
    Object.getOwnPropertyDescriptor(prototype, "value") || {};

  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else if (valueSetter) {
    valueSetter.call(element, value);
  } else {
    throw new Error("The given element does not have a value setter");
  }
};

export {
  formatResponse,
  includesQuery,
  sort,
  truncate,
  toColorString,
  setNativeValue,
};
