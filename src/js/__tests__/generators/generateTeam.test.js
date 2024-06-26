import { generateTeam } from '../../generators';

describe('generateTeam', () => {
  test('Create Team', () => {
    const team = generateTeam(['swordsman', 'bowman'], 4, 4);

    expect(team.characters.length).toBe(4);
  });

  test('Working characters', () => {
    const team = generateTeam(['swordsman', 'bowman'], 4, 4);

    let result = true;
    for (let i = 0; i < 4; i++) {
      if (team.characters[i] === undefined) {
        result = false;
      }
    }

    expect(result).toBe(true);
  });

  test('maxLevel', () => {
    const team = generateTeam(['swordsman', 'bowman'], 4, 30);
    let levelRange = true;

    for (let i = 0; i < 30; i++) {
      if (team.characters[i].level > 4 || team.characters[i].level < 1) {
        levelRange = false;
      }
    }

    expect(levelRange).toBe(true);
  });
});
