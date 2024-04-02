import { expect, test } from 'vitest';
import { truncate } from './truncate';

test('default behavior', () => {
  expect(truncate('hi-diddly-ho there, neighborino')).toEqual('hi-diddly-ho there, neighbo...');
});

test('no truncation', () => {
  expect(truncate('hi-diddly-ho')).toEqual('hi-diddly-ho');
});

test('custom length and separator', () => {
  expect(truncate('hi-diddly-ho there, neighborino', { length: 24, separator: ' ' })).toEqual('hi-diddly-ho there,...');
});

test('regex separator', () => {
  expect(truncate('hi-diddly-ho there, neighborino', { length: 24, separator: /,? +/g })).toEqual(
    'hi-diddly-ho there...'
  );
});

test('custom omission', () => {
  expect(truncate('hi-diddly-ho there, neighborino', { omission: ' [...]' })).toEqual('hi-diddly-ho there, neig [...]');
});
