import { Swordsman } from '../../characters/Swordsman';
import GameController from '../../GameController';
import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';

test('formatCharacterInfo', () => {
  const gamePlay = new GamePlay();
  const stateService = new GameStateService();
  const gameController = new GameController(gamePlay, stateService);

  const swordsman = new Swordsman(1);
  const result = gameController.formatCharacterInfo(...Object.values(swordsman));

  expect(result).toBe(
    `\u{1F396}${swordsman.level} \u{2694}${swordsman.attack} \u{1F6E1}${swordsman.defence} \u{2764}${swordsman.health}`,
  );
});
