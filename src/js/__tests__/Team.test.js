import Team from '../Team';
import { Swordsman } from '../characters/Swordsman';
import { Bowman } from '../characters/Bowman';

describe('Team', () => {
  test('Create Team', () => {
    const team = new Team([new Swordsman(2), new Bowman(1)]);

    expect(team.characters.length).toBe(2);
  });

  test('Invalid type', () => {
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

  test('Set character', () => {
    const team = new Team([new Swordsman(2), new Bowman(1)]);

    team.characters = new Swordsman(4);

    expect(team.characters.length).toBe(3);
  });

  test('Get character', () => {
    const team = new Team([new Swordsman(2), new Bowman(1)]);

    expect(team.characters).toEqual([
      { level: 2, attack: 40, defence: 10, health: 50, type: 'swordsman' },
      { level: 1, attack: 25, defence: 25, health: 50, type: 'bowman' },
    ]);
  });
});
