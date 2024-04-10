import PositionedCharacter from '../PositionedCharacter';
import { Swordsman } from '../characters/Swordsman';

test('PositionedCharacter correct', () => {
  const swordsman = new Swordsman(1);
  const positionedCharacter = new PositionedCharacter(swordsman, 10);

  expect(positionedCharacter).toEqual({
    character: { level: 1, attack: 40, defence: 10, health: 50, type: 'swordsman' },
    position: 10,
  });
});

test('PositionedCharacter, Error Character', () => {
  const swordsman = { type: 'fakeSwordsman', level: 100500 };
  let errorMessage;

  try {
    new PositionedCharacter(swordsman, 10);
  } catch (error) {
    errorMessage = error.message;
  }

  expect(errorMessage).toBe('characters must be instance of Character or its children');
});

test('PositionedCharacter, Error position', () => {
  const swordsman = new Swordsman(1);
  let errorMessage;

  try {
    new PositionedCharacter(swordsman, '10');
  } catch (error) {
    errorMessage = error.message;
  }

  expect(errorMessage).toBe('position must be a number');
});
