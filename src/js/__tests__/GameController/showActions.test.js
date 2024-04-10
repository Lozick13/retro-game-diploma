import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import GameController from '../../GameController';
import PositionedCharacter from '../../PositionedCharacter';
import cursors from '../../cursors';
import { Magician } from '../../characters/Magician';
import { Daemon } from '../../characters/Daemon';
import { Swordsman } from '../../characters/Swordsman';

describe('showActions', () => {
  const gamePlay = new GamePlay();
  const stateService = new GameStateService();
  const deselectCellMock = jest.fn();
  const selectCellMock = jest.fn();
  const setCursorMock = jest.fn();
  const magician = new Magician(2);

  gamePlay.selectCell = selectCellMock;
  gamePlay.setCursor = setCursorMock;
  test('field', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.deselectCells = deselectCellMock;
    gameController.indexSelectedCharacter = 27;
    gameController.selectedCharacter = magician;
    gameController.showActions(false, 28);

    expect(selectCellMock).toHaveBeenCalledWith(28, 'green');
    expect(setCursorMock).toHaveBeenCalledWith(cursors.pointer);
  });

  test('impossibility', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.indexSelectedCharacter = 27;
    gameController.selectedCharacter = magician;
    gameController.deselectCells = deselectCellMock;
    gameController.showActions(false, 29);

    expect(setCursorMock).toHaveBeenCalledWith(cursors.notallowed);
  });

  test('foundCharacter - enemy', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.positions.push(new PositionedCharacter(magician, 27));
    gameController.positions.push(new PositionedCharacter(new Daemon(2), 29));
    gameController.indexSelectedCharacter = 27;
    gameController.selectedCharacter = magician;
    gameController.deselectCells = deselectCellMock;

    const foundCharacter = gameController.positions.find(
      ({ position }) => position === 29,
    );

    gameController.showActions(foundCharacter, 29);

    expect(selectCellMock).toHaveBeenCalledWith(29, 'red');
    expect(setCursorMock).toHaveBeenCalledWith(cursors.crosshair);
  });

  test('foundCharacter - player', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.positions.push(new PositionedCharacter(new Swordsman(2), 27));
    gameController.positions.push(new PositionedCharacter(magician, 29));
    gameController.indexSelectedCharacter = 27;
    gameController.selectedCharacter = magician;
    gameController.deselectCells = deselectCellMock;
    gamePlay.deselectCell = deselectCellMock;

    const foundCharacter = gameController.positions.find(
      ({ position }) => position === 29,
    );

    gameController.showActions(foundCharacter, 29);

    expect(setCursorMock).toHaveBeenCalledWith(cursors.pointer);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
