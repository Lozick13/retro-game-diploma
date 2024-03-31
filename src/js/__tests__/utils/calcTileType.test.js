import { calcTileType } from '../../utils';

test('calcTileType', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
  expect(calcTileType(1, 8)).toBe('top');
  expect(calcTileType(63, 8)).toBe('bottom-right');
  expect(calcTileType(7, 7)).toBe('left');
});
