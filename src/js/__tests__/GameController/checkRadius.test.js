import GameController from '../../GameController';
import GamePlay from '../../GamePlay';
import GameStateService from '../../GameStateService';

describe('calculatedRadius', () => {
  test('correct', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    const center = 25;
    const radius = 1;

    const result = gameController.calculatedRadius(center, 26, radius);

    expect(result).toBe(true);
  });

  test('index outside radius', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    const center = 25;
    const radius = 1;

    const result = gameController.calculatedRadius(center, 27, radius);

    expect(result).toBe(false);
  });

  test('radius = 1', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    const center = 25;
    const radius = 1;
    const radiusCells = [];

    for (let index = 0; index < 64; index++) {
      if (gameController.calculatedRadius(center, index, radius)) {
        radiusCells.push(index);
      }
    }

    expect(radiusCells).toEqual([16, 17, 18, 24, 25, 26, 32, 33, 34]);
  });

  test('radius = 2, field edge taken into account', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    const center = 25;
    const radius = 2;
    const radiusCells = [];

    for (let index = 0; index < 64; index++) {
      if (gameController.calculatedRadius(center, index, radius)) {
        radiusCells.push(index);
      }
    }

    expect(radiusCells).toEqual([
      8, 9, 10, 11, 16, 17, 18, 19, 24, 25, 26, 27, 32, 33, 34, 35, 40, 41, 42, 43,
    ]);
  });

  test('radius = 4, field edge taken into account', () => {
    const gamePlay = new GamePlay();
    const stateService = new GameStateService();
    const gameController = new GameController(gamePlay, stateService);

    const center = 25;
    const radius = 4;
    const radiusCells = [];

    for (let index = 0; index < 64; index++) {
      if (gameController.calculatedRadius(center, index, radius)) {
        radiusCells.push(index);
      }
    }

    expect(radiusCells).toEqual([
      0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
      29, 32, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 45, 48, 49, 50, 51, 52, 53, 56, 57,
      58, 59, 60, 61,
    ]);
  });
});
