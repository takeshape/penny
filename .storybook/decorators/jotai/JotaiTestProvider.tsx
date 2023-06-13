import { Provider, WritableAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import React, { ReactElement } from 'react';

export type AnyWritableAtom = WritableAtom<unknown, any[], any>;
export type InitialValues = (readonly [AnyWritableAtom, unknown])[];

type JotaiTestProviderProps = {
  initialValues: InitialValues;
  children: ReactElement;
};

function HydrateAtoms({ initialValues, children }: JotaiTestProviderProps) {
  useHydrateAtoms(initialValues);
  return children;
}

export function JotaiTestProvider({ initialValues, children }: JotaiTestProviderProps) {
  return (
    <Provider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
  );
}
