import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import GameController from '../../GameController';
import PositionedCharacter from '../../PositionedCharacter';
import { Swordsman } from '../../characters/Swordsman';

describe('checkPlayerCharacterCell', () => {
  test('successes', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);
    const selectCellMock = jest.fn();

    gamePlay.selectCell = selectCellMock;
    gameController.positions.push(new PositionedCharacter(new Swordsman(2), 27));

    expect(gameController.checkPlayerCharacterCell(27)).toBe(true);
    expect(selectCellMock).toHaveBeenCalled();
  });

  test('fail', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);
    const selectCellMock = jest.fn();

    gamePlay.selectCell = selectCellMock;
    gameController.positions.push(new PositionedCharacter(new Swordsman(2), 27));

    expect(gameController.checkPlayerCharacterCell(28)).toBe(false);
    expect(selectCellMock).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
