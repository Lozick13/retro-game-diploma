import { characterGenerator } from '../../generators';

test('characterGenerator check type', () => {
  const allowedTypes = ['Swordsman', 'Bowman', 'Magician', 'Daemon', 'Undead', 'Vampire'];
  const maxLevel = 4;

  const generator = characterGenerator(allowedTypes, maxLevel);
  const character = generator.next().value;

  expect(allowedTypes.includes(character.type)).toBe(true);
});

test('chatacterGenerator Error', () => {
  const allowedTypes = ['fakeSwordsman', 'fakeBowman'];
  const maxLevel = 4;
  let errorMessage;

  try {
    const generator = characterGenerator(allowedTypes, maxLevel);
    generator.next().value;
  } catch (e) {
    errorMessage = e.message;
  }

  expect(errorMessage).toBe('Invalid type');
});
