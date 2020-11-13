import React from "react";

import MediaQuery from "react-responsive";

interface IBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const rwd: IBreakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

const MaxXs: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={rwd.xs - 1} />
);
const MaxSm: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={rwd.sm - 1} />
);
const MaxMd: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={rwd.md - 1} />
);
const MaxLg: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={rwd.lg - 1} />
);
const MaxXl: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} maxWidth={rwd.xl - 1} />
);

const MinXs: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={rwd.xs} />
);
const MinSm: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={rwd.sm} />
);
const MinMd: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={rwd.md} />
);
const MinLg: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={rwd.lg} />
);
const MinXl: <T>(props: T) => JSX.Element = (props) => (
  <MediaQuery {...props} minWidth={rwd.xl} />
);

export { MaxXs, MaxSm, MaxMd, MaxLg, MaxXl, MinXs, MinSm, MinMd, MinLg, MinXl };
