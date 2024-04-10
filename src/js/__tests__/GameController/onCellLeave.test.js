import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import GameController from '../../GameController';

test('onCellLeave', () => {
  const gamePlay = new GamePlay();
  const stateService = new GameStateService();
  const gameController = new GameController(gamePlay, stateService);
  const hideCellTooltipMock = jest.fn();

  gamePlay.hideCellTooltip = hideCellTooltipMock;
  gameController.onCellLeave(10);

  expect(hideCellTooltipMock).toHaveBeenCalledWith(10);
});
