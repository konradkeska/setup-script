import React from "react";
import { Link } from "components/atoms";

const sort = <T,>(arr: T[], callback: (a: T, b: T) => number) =>
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

const getWasUserGuided = (): boolean =>
  window.localStorage.getItem("wasGuided") === "true";

const getBundleCreatedToast = (id: string) => (
  <div>
    <p>You can access / share your bundle with this link (current URL):</p>
    <Link href={`https://www.setup-script.com/${id}`} withoutMargin>
      https://www.setup-script.com/{id}
    </Link>
    <p>
      <b>IMPORTANT:</b> Save it somewhere! If you lose it you won't be able to
      retrieve it.
    </p>
    <p>
      <b>NOTICE:</b> Everyone with access to the link can modify it.
    </p>
  </div>
);

export {
  sort,
  truncate,
  setNativeValue,
  getWasUserGuided,
  getBundleCreatedToast,
};
