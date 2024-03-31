import Team from '../../Team';
import { Swordsman } from '../../characters/Swordsman';
import { Bowman } from '../../characters/Bowman';

test('Create Team', () => {
  const team = new Team([new Swordsman(2), new Bowman(1)]);

  expect(team.characters.length).toBe(2);
});

test('Create Team Error', () => {
  let errorMessage;
  class fakeBowman {
    constructor(level) {
      this.level = level;
    }
  }

  try {
    new Team([new Swordsman(2), new fakeBowman(1)]);
  } catch (error) {
    errorMessage = error.message;
  }

  expect(errorMessage).toBe('characters must be instance of Character or its children');
});

test('Team, Set character', () => {
  const team = new Team([new Swordsman(2), new Bowman(1)]);

  team.characters = new Swordsman(4);

  expect(team.characters.length).toBe(3);
});

test('Team, Get character', () => {
  const team = new Team([new Swordsman(2), new Bowman(1)]);

  expect(team.characters.toString()).toBe(
    [
      { attack: 40, defence: 10, health: 50, level: 2, type: 'Swordsman' },
      { attack: 25, defence: 25, health: 50, level: 1, type: 'Bowman' },
    ].toString(),
  );
});
