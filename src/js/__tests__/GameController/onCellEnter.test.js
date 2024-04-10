import GameController from '../../GameController';
import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import { Swordsman } from '../../characters/Swordsman';
import PositionedCharacter from '../../PositionedCharacter';

describe('onCellEnter', () => {
  const gamePlay = new GamePlay();
  const stateService = new GameStateService();
  const drawUiMock = jest.fn();
  const redrawPositionsMock = jest.fn();
  const showCellTooltipMock = jest.fn();
  const showActionsMock = jest.fn();

  gamePlay.drawUi = drawUiMock;
  gamePlay.redrawPositions = redrawPositionsMock;
  gamePlay.showCellTooltip = showCellTooltipMock;

  test('foundCharacter = true', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.init();
    gameController.positions.push(new PositionedCharacter(new Swordsman(2), 27));
    gameController.onCellEnter(27);

    expect(showCellTooltipMock).toHaveBeenCalledWith('🎖2 ⚔40 🛡10 ❤50', 27);
  });

  test('foundCharacter = false', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.init();
    gameController.onCellEnter(27);

    expect(showCellTooltipMock).not.toHaveBeenCalled();
  });

  test('this.indexSelectedCharacter !== null', () => {
    const gameController = new GameController(gamePlay, stateService);

    gameController.showActions = showActionsMock;
    gameController.indexSelectedCharacter = 27;
    gameController.positions.push(new PositionedCharacter(new Swordsman(2), 27));
    gameController.init();
    gameController.onCellEnter(27);

    expect(showActionsMock).toHaveBeenCalledWith(
      {
        character: { attack: 40, defence: 10, health: 50, level: 2, type: 'swordsman' },
        position: 27,
      },
      27,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
