import { AnyWritableAtom, InitialValues, JotaiTestProvider } from './JotaiTestProvider';

export function withJotai(StoryFn: any, context: any) {
  const {
    parameters: { jotai }
  } = context;

  if (!jotai) {
    return StoryFn();
  }

  const { atoms, values } = jotai;

  const initialValues: InitialValues = [];

  for (const [key, value] of Object.entries(atoms)) {
    initialValues.push([value as AnyWritableAtom, values[key]]);
  }

  return <JotaiTestProvider initialValues={initialValues}>{StoryFn()}</JotaiTestProvider>;
}
