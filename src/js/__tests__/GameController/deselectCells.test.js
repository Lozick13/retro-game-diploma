import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import GameController from '../../GameController';

describe('deselectCells', () => {
  test('indexSelectedCharacter = null', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);
    const deselectCellMock = jest.fn();

    gamePlay.deselectCell = deselectCellMock;
    gameController.deselectCells();

    expect(deselectCellMock).toHaveBeenCalledTimes(64);
  });

  test('indexSelectedCharacter exists', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);
    const deselectCellMock = jest.fn();

    gamePlay.deselectCell = deselectCellMock;
    gameController.indexSelectedCharacter = 10;
    gameController.deselectCells();

    expect(deselectCellMock).toHaveBeenCalledTimes(63);
  });
});
