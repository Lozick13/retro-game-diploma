import themes from './themes';
import PositionedCharacter from './PositionedCharacter';
import { generateTeam } from './generators';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    const allowedTypes = [
      'swordsman',
      'bowman',
      'magician',
      'daemon',
      'undead',
      'vampire',
    ];
    const maxLevel = 4;
    const countCharacters = 5;
    const positions = [];

    const teamBlue = generateTeam(allowedTypes, maxLevel, countCharacters);
    const teamRed = generateTeam(allowedTypes, maxLevel, countCharacters);

    for (let i = 0; i < countCharacters; i++) {
      let positionRepeat = false;

      const positionBlue =
        Math.floor(Math.random() * 8) * 8 + Math.floor(Math.random() * 2);
      const positionRed =
        Math.floor(Math.random() * 8) * 8 + Math.floor(Math.random() * 2) + 6;

      positions.forEach(position => {
        if (position.position === positionRed || position.position === positionBlue) {
          positionRepeat = true;
        }
      });

      if (positionRepeat) {
        i--;
        continue;
      }

      positions.push(new PositionedCharacter(teamBlue.characters[i], positionBlue));
      positions.push(new PositionedCharacter(teamRed.characters[i], positionRed));
    }

    this.gamePlay.drawUi(themes.desert);
    this.gamePlay.redrawPositions(positions);
  }
  //
  // onCellClick(index) {
  //   // TODO: react to click
  // }
  //
  // onCellEnter(index) {
  //   // TODO: react to mouse enter
  // }
  //
  // onCellLeave(index) {
  //   // TODO: react to mouse leave
  // }
}
