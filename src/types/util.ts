import { ReactElement } from 'react';
import { Any, List, Object } from 'ts-toolbelt';

type Renderable = number | string | ReactElement | Renderable[];

export type PropsWithCallableChildren<P, Q> = P & {
  children: (arg: Q) => Renderable | undefined;
};

export type NonNullablePath<T, P extends List.List<Any.Key>> = NonNullable<Object.Path<T, P>>;

/**
 * https://stackoverflow.com/questions/57835286/deep-recursive-requiredt-on-specific-properties
 */

// Analogues to array.prototype.shift
export type Shift<T extends any[]> = ((...t: T) => any) extends (first: any, ...rest: infer Rest) => any ? Rest : never;

// use a distributed conditional type here
export type ShiftUnion<T> = T extends any[] ? Shift<T> : never;

export type DeepRequired<T, P extends string[]> = T extends object
  ? Omit<T, Extract<keyof T, P[0]>> &
      Required<{
        [K in Extract<keyof T, P[0]>]: NonNullable<DeepRequired<T[K], ShiftUnion<P>>>;
      }>
  : T;
