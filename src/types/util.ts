import { ReactElement } from 'react';

type Renderable = number | string | ReactElement | Renderable[];

export type PropsWithCallableChildren<P, Q> = P & {
  children: (arg: Q) => Renderable | undefined;
};
