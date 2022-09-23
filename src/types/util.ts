import { ReactElement } from 'react';
import { Any, List, Object } from 'ts-toolbelt';

type Renderable = number | string | ReactElement | Renderable[];

export type PropsWithCallableChildren<P, Q> = P & {
  children: (arg: Q) => Renderable | undefined;
};

export type NonNullablePath<T, P extends List.List<Any.Key>> = NonNullable<Object.Path<T, P>>;
