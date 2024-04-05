import themes from './themes';
import PositionedCharacter from './PositionedCharacter';
import { generateTeam } from './generators';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.positions = [];
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

    const teamBlue = generateTeam(allowedTypes, maxLevel, countCharacters);
    const teamRed = generateTeam(allowedTypes, maxLevel, countCharacters);

    for (let i = 0; i < countCharacters; i++) {
      let positionRepeat = false;

      const positionBlue =
        Math.floor(Math.random() * 8) * 8 + Math.floor(Math.random() * 2);
      const positionRed =
        Math.floor(Math.random() * 8) * 8 + Math.floor(Math.random() * 2) + 6;

      this.positions.forEach(({ position }) => {
        if (position === positionRed || position === positionBlue) {
          positionRepeat = true;
        }
      });

      if (positionRepeat) {
        i--;
        continue;
      }

      this.positions.push(new PositionedCharacter(teamBlue.characters[i], positionBlue));
      this.positions.push(new PositionedCharacter(teamRed.characters[i], positionRed));
    }

    this.gamePlay.drawUi(themes.desert);
    this.gamePlay.redrawPositions(this.positions);
    this.setupEventListeners();
  }
  formatCharacterInfo(level, attack, defence, health) {
    return `\u{1F396}${level} \u{2694}${attack} \u{1F6E1}${defence} \u{2764}${health}`;
  }
  setupEventListeners() {
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
  }

  // onCellClick(index) {
  //   // TODO: react to click
  // }

  onCellEnter(index) {
    this.positions.forEach(({ position, character }) => {
      if (position === index) {
        this.gamePlay.showCellTooltip(
          this.formatCharacterInfo(...Object.values(character)),
          index,
        );
      }
    });
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index);
  }
}
