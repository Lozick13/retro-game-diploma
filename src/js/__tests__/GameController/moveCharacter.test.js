import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import GameController from '../../GameController';
import PositionedCharacter from '../../PositionedCharacter';
import { Swordsman } from '../../characters/Swordsman';

test('moveCharacter', () => {
  const gamePlay = new GamePlay();
  const stateService = new GameStateService();
  const gameController = new GameController(gamePlay, stateService);
  const redrawPositionsMock = jest.fn();

  gamePlay.redrawPositions = redrawPositionsMock;
  gameController.indexSelectedCharacter = 10;
  gameController.positions.push(new PositionedCharacter(new Swordsman(2), 10));
  gameController.moveCharacter(15);

  expect(gameController.positions[0].position).toBe(15);
  expect(redrawPositionsMock).toHaveBeenCalledWith(gameController.positions);
});
