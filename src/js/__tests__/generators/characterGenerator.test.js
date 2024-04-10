import { characterGenerator } from '../../generators';

describe('characterGenerator', () => {
  test('check type', () => {
    const allowedTypes = [
      'swordsman',
      'bowman',
      'magician',
      'daemon',
      'undead',
      'vampire',
    ];
    const maxLevel = 4;

    const generator = characterGenerator(allowedTypes, maxLevel);
    const character = generator.next().value;

    expect(allowedTypes.includes(character.type)).toBe(true);
  });

  test('Many Character', () => {
    const allowedTypes = [
      'swordsman',
      'bowman',
      'magician',
      'daemon',
      'undead',
      'vampire',
    ];
    const maxLevel = 4;

    const generator = characterGenerator(allowedTypes, maxLevel);
    const characters = [];
    for (let i = 0; i < 30; i++) {
      const character = generator.next().value;

      if (character) {
        characters.push(character);
      }
    }

    expect(characters.length).toBe(30);
  });

  test('Invalid type', () => {
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
});
