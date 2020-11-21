import React from "react";
import MediaQuery from "react-responsive";

interface IBreakpoints {
  XS: number;
  SM: number;
  MD: number;
  LG: number;
  XL: number;
}

const RWD: IBreakpoints = {
  XS: 576,
  SM: 768,
  MD: 992,
  LG: 1200,
  XL: 1600,
};

const MaxXs: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={RWD.XS - 1} />
);
const MaxSm: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={RWD.SM - 1} />
);
const MaxMd: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={RWD.MD - 1} />
);
const MaxLg: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={RWD.LG - 1} />
);
const MaxXl: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={RWD.XL - 1} />
);

const MinXs: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={RWD.XS} />
);
const MinSm: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={RWD.SM} />
);
const MinMd: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={RWD.MD} />
);
const MinLg: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={RWD.LG} />
);
const MinXl: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={RWD.XL} />
);

export {
  RWD,
  MaxXs,
  MaxSm,
  MaxMd,
  MaxLg,
  MaxXl,
  MinXs,
  MinSm,
  MinMd,
  MinLg,
  MinXl,
};
