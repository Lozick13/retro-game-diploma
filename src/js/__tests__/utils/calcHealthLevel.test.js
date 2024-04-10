import { calcHealthLevel } from '../../utils';

test('calcHealthLevel', () => {
  expect(calcHealthLevel(14)).toBe('critical');
  expect(calcHealthLevel(49)).toBe('normal');
  expect(calcHealthLevel(51)).toBe('high');
});
