import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';
import GameController from '../../GameController';
import { Bowman } from '../../characters/Bowman';
import { Swordsman } from '../../characters/Swordsman';
import { Magician } from '../../characters/Magician';

describe('getAttackZone', () => {
  test('radius 1', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    gameController.selectedCharacter = new Swordsman(2);
    gameController.indexSelectedCharacter = 12;

    const playerTypes = ['swordsman', 'bowman', 'magician'];
    const attackZone = gameController.getAttackZone(playerTypes, 13);

    expect(attackZone).toBe(true);
  });

  test('radius 2', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    gameController.selectedCharacter = new Bowman(2);
    gameController.indexSelectedCharacter = 12;

    const playerTypes = ['swordsman', 'bowman', 'magician'];
    const attackZone = gameController.getAttackZone(playerTypes, 14);

    expect(attackZone).toBe(true);
  });

  test('radius 4', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    gameController.selectedCharacter = new Magician(2);
    gameController.indexSelectedCharacter = 12;

    const playerTypes = ['swordsman', 'bowman', 'magician'];
    const attackZone = gameController.getAttackZone(playerTypes, 14);

    expect(attackZone).toBe(true);
  });

  test('playersTypes empty', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    gameController.selectedCharacter = new Bowman(2);
    gameController.indexSelectedCharacter = 12;

    const playerTypes = [];
    let errorMessage;

    try {
      gameController.getAttackZone(playerTypes, 2);
    } catch (e) {
      errorMessage = e.message;
    }

    expect(errorMessage).toBe('Invalid types');
  });
});
