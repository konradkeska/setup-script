export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | undefined
  | null;

export type Builtin = Primitive | Function | Date | Error | RegExp;

export type Brand<T, BrandT> = T & { __brand: BrandT };

export type Flavor<T, FlavorT> = T & { __flavor?: FlavorT };

export type Nominal<T, NameT> = T extends object
  ? Flavor<T, NameT>
  : Brand<T, NameT>;
