import GameController from '../../GameController';
import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import { Magician } from '../../characters/Magician';
import PositionedCharacter from '../../PositionedCharacter';
import cursors from '../../cursors';

describe('onCellClick', () => {
  const gamePlay = new GamePlay();
  const stateService = new GameStateService();
  const magician = new Magician(2);
  const deselectCellMock = jest.fn();
  const showErrorMock = jest.fn();
  const moveCharacterMock = jest.fn();
  const setCursorMock = jest.fn();

  test('Deselect selected Character', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.indexSelectedCharacter = 27;
    gamePlay.deselectCell = deselectCellMock;
    gameController.onCellClick(27);

    expect(deselectCellMock).toHaveBeenCalledWith(27);
  });

  test('Character is not on this square', () => {
    const gameController = new GameController(gamePlay, stateService);

    GamePlay.showError = showErrorMock;
    gameController.onCellClick(27);

    expect(showErrorMock).toHaveBeenCalledWith('Your character is not on this square');
  });

  test('Character movement', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.positions.push(new PositionedCharacter(magician, 27));
    gameController.indexSelectedCharacter = 27;
    gameController.selectedCharacter = magician;
    gameController.moveCharacter = moveCharacterMock;
    gamePlay.setCursor = setCursorMock;
    gameController.onCellClick(28);

    expect(moveCharacterMock).toHaveBeenCalledWith(28);
    expect(setCursorMock).toHaveBeenCalledWith(cursors.auto);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
