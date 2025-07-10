import { capitalize } from '../../utils/format';

test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('')).toBe('');
  expect(capitalize()).toBe('');
}); 