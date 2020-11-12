import { DefaultTheme } from "styled-components";

import { FontColors, MaterialColors, PrimaryColors } from "../types";
import { BaseFields, Filterable, Setting, Soft } from "../types";

const formatResponse = (records: Soft[]): Soft[] =>
  records.map((record) => ({
    ...record,
    name:
      typeof record.name === "string"
        ? record.name
        : (record.name as string[]).join(" "),
  }));

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

function setNativeValue(element: HTMLElement, value: string | number) {
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
}

export {
  formatResponse,
  includesQuery,
  truncate,
  matches,
  notMatches,
  toColorString,
  setNativeValue,
};
