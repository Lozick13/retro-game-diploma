import { generateTeam } from '../../generators';

test('generateTeam create Team', () => {
  const team = generateTeam(['Swordsman', 'Bowman'], 4, 4);

  expect(team.characters.length).toBe(4);
});

test('generateTeam working characters', () => {
  const team = generateTeam(['Swordsman', 'Bowman'], 4, 4);

  let result = true;
  for (let i = 0; i < 4; i++) {
    if (team.characters[i] === undefined) {
      result = false;
    }
  }

  expect(result).toBe(true);
});
