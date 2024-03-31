import { characterGenerator } from '../../generators';

test('characterGenerator check type', () => {
  const allowedTypes = ['Swordsman', 'Bowman', 'Magician', 'Daemon', 'Undead', 'Vampire'];
  const maxLevel = 4;

  const generator = characterGenerator(allowedTypes, maxLevel);
  const character = generator.next().value;

  expect(allowedTypes.includes(character.type)).toBe(true);
});

test('characterGenerator many Character', () => {
  const allowedTypes = ['Swordsman', 'Bowman', 'Magician', 'Daemon', 'Undead', 'Vampire'];
  const maxLevel = 4;

  const generator = characterGenerator(allowedTypes, maxLevel);
  const characters = [];
  for (let i = 0; i < 10; i++) {
    characters.push(generator.next().value);
    if (characters[i] === undefined) {
      characters.length = 0;
    }
  }

  expect(characters.length).toBe(10);
});

test('characterGenerator Error', () => {
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
