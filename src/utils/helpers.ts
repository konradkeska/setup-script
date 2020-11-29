const sort = <T>(arr: T[], callback: (a: T, b: T) => number) =>
  [...arr].sort(callback);

const truncate = (value: string, limit = 10) =>
  value.length > limit ? `${value.slice(0, limit - 2)}..` : value;

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

const getActiveBundleId = () => {
  const { pathname } = window.location;
  return pathname.slice(1, pathname.length);
};

const getWasUserGuided = (): boolean =>
  window.localStorage.getItem("wasGuided") === "true" || false;

export { sort, truncate, setNativeValue, getActiveBundleId, getWasUserGuided };
