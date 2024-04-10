import GameController from '../../GameController';
import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';

test('init()', () => {
  const gamePlay = new GamePlay();
  const stateService = new GameStateService();
  const gameController = new GameController(gamePlay, stateService);

  const drawUiMock = jest.fn();
  const redrawPositionsMock = jest.fn();

  gamePlay.drawUi = drawUiMock;
  gamePlay.redrawPositions = redrawPositionsMock;

  gameController.init();

  expect(gameController.positions.length).toBe(10);
});
