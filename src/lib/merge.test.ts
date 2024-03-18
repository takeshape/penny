import { expect, test } from 'vitest';
import { mergeDeep } from './merge';

test('mergeDeep', () => {
  expect(
    mergeDeep(
      {
        string: 'foo',
        array: ['c', 'd'],
        object: {
          string: 'bat'
        }
      },
      {
        string: 'bar',
        array: ['a', 'b'],
        object: {
          string: 'baz'
        }
      }
    )
  ).toEqual({ string: 'bar', array: ['a', 'b', 'c', 'd'], object: { string: 'baz' } });
});
