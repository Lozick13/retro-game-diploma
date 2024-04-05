import Team from '../../Team';
import { Swordsman } from '../../characters/Swordsman';
import { Bowman } from '../../characters/Bowman';
import { generateTeam } from '../../generators';
import GameController from '../../GameController';
import PositionedCharacter from '../../PositionedCharacter';

test('init', () => {
  const team = generateTeam(['swordsman', 'bowman'], 4, 4);
  const gameController = GameController.init();

  expect(team).toHaveBeenCalledTimes(2);
  expect(gameController.gamePlay.drawUi).toHaveBeenCalledWith(expect.any(Object));
  expect(gameController.gamePlay.redrawPositions).toHaveBeenCalledWith([
    new PositionedCharacter(team.characters[0], expect.any(Number)),
    new PositionedCharacter(team.characters[1], expect.any(Number)),
    new PositionedCharacter(team.characters[0], expect.any(Number)),
    new PositionedCharacter(team.characters[1], expect.any(Number)),
    new PositionedCharacter(team.characters[0], expect.any(Number)),
    new PositionedCharacter(team.characters[1], expect.any(Number)),
    new PositionedCharacter(team.characters[0], expect.any(Number)),
    new PositionedCharacter(team.characters[1], expect.any(Number)),
    new PositionedCharacter(team.characters[0], expect.any(Number)),
    new PositionedCharacter(team.characters[1], expect.any(Number)),
  ]);
  expect(gameController.gamePlay.addCellEnterListener).toHaveBeenCalled();
});
