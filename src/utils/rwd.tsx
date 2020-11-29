import React from "react";
import MediaQuery, { MediaQueryProps } from "react-responsive";

enum RWD {
  XS = 576,
  SM = 768,
  MD = 992,
  LG = 1200,
  XL = 1600,
}

const MaxXs = (props: MediaQueryProps) => (
  <MediaQuery {...props} maxWidth={RWD.XS - 1} />
);

const MaxSm = (props: MediaQueryProps) => (
  <MediaQuery {...props} maxWidth={RWD.SM - 1} />
);

const MaxMd = (props: MediaQueryProps) => (
  <MediaQuery {...props} maxWidth={RWD.MD - 1} />
);

const MaxLg = (props: MediaQueryProps) => (
  <MediaQuery {...props} maxWidth={RWD.LG - 1} />
);

const MaxXl = (props: MediaQueryProps) => (
  <MediaQuery {...props} maxWidth={RWD.XL - 1} />
);

const MinXs = (props: MediaQueryProps) => (
  <MediaQuery {...props} minWidth={RWD.XS} />
);

const MinSm = (props: MediaQueryProps) => (
  <MediaQuery {...props} minWidth={RWD.SM} />
);

const MinMd = (props: MediaQueryProps) => (
  <MediaQuery {...props} minWidth={RWD.MD} />
);

const MinLg = (props: MediaQueryProps) => (
  <MediaQuery {...props} minWidth={RWD.LG} />
);

const MinXl = (props: MediaQueryProps) => (
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
