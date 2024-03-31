import { characterGenerator } from '../../generators';

test('characterGenerator check type', () => {
  const allowedTypes = ['Swordsman', 'Bowman', 'Magician', 'Daemon', 'Undead', 'Vampire'];
  const maxLevel = 4;

  const generator = characterGenerator(allowedTypes, maxLevel);
  const character = generator.next().value;

  expect(allowedTypes.includes(character.type)).toBe(true);
});
