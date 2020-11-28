import { DefaultTheme } from "styled-components";

import { FontColor, MaterialColor, PrimaryColor } from "theme";

const sort = <T>(arr: T[], callback: (a: T, b: T) => number) =>
  [...arr].sort(callback);

const truncate = (value: string, limit = 10) =>
  value.length > limit ? `${value.slice(0, limit - 2)}..` : value;

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

export { sort, truncate, toColorString, setNativeValue };
