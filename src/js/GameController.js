import themes from './themes';
import PositionedCharacter from './PositionedCharacter';
import { generateTeam } from './generators';
import GamePlay from './GamePlay';
import cursors from './cursors';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.positions = [];
    this.indexSelectedCharacter = null;
    this.selectedCharacter = null;
  }

  init() {
    const playerTypes = ['swordsman', 'bowman', 'magician'];
    const computerTypes = ['daemon', 'undead', 'vampire'];
    const maxLevel = 4;
    const countCharacters = 5;

    const playerTeam = generateTeam(playerTypes, maxLevel, countCharacters);
    const computerTeam = generateTeam(computerTypes, maxLevel, countCharacters);

    for (let i = 0; i < countCharacters; i++) {
      let positionRepeat = false;

      const positionPlayer =
        Math.floor(Math.random() * 8) * 8 + Math.floor(Math.random() * 2);
      const positionComputer =
        Math.floor(Math.random() * 8) * 8 + Math.floor(Math.random() * 2) + 5;

      this.positions.forEach(({ position }) => {
        if (position === positionComputer || position === positionPlayer) {
          positionRepeat = true;
        }
      });

      if (positionRepeat) {
        i--;
        continue;
      }

      this.positions.push(
        new PositionedCharacter(playerTeam.characters[i], positionPlayer),
      );
      this.positions.push(
        new PositionedCharacter(computerTeam.characters[i], positionComputer),
      );
    }

    this.gamePlay.drawUi(themes.desert);
    this.gamePlay.redrawPositions(this.positions);
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
  }

  onCellClick(index) {
    if (this.indexSelectedCharacter) {
      this.gamePlay.deselectCell(this.indexSelectedCharacter);
    }

    if (this.indexSelectedCharacter !== index) {
      const playerTypes = ['swordsman', 'bowman', 'magician'];
      const playerCell = this.positions.some(({ position, character }) => {
        if (position === index && playerTypes.includes(character.type)) {
          this.gamePlay.selectCell(index);
          this.indexSelectedCharacter = index;
          this.selectedCharacter = character;

          return true;
        }
        return false;
      });

      if (!playerCell) {
        GamePlay.showError('Your character is not on this square');
      }
    } else {
      this.indexSelectedCharacter = null;
      this.selectedCharacter = null;
    }
  }

  onCellEnter(index) {
    const foundCharacter = this.positions.find(({ position }) => position === index);
    if (foundCharacter) {
      const { character } = foundCharacter;

      this.gamePlay.showCellTooltip(
        this.formatCharacterInfo(...Object.values(character)),
        index,
      );
    }

    if (this.indexSelectedCharacter !== null) {
      this.showActions(index);
    }
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index);
  }

  formatCharacterInfo(level, attack, defence, health) {
    return `\u{1F396}${level} \u{2694}${attack} \u{1F6E1}${defence} \u{2764}${health}`;
  }

  showActions(index) {
    const foundCharacter = this.positions.find(({ position }) => position === index);
    const playerTypes = ['swordsman', 'bowman', 'magician'];

    const movementRadius =
      this.selectedCharacter.type === playerTypes[0]
        ? 4
        : this.selectedCharacter.type === playerTypes[1]
          ? 2
          : 1;
    const attackRadius =
      this.selectedCharacter.type === playerTypes[0]
        ? 1
        : this.selectedCharacter.type === playerTypes[1]
          ? 2
          : 4;

    const movementZone = this.calculatedRadius(
      this.indexSelectedCharacter,
      index,
      movementRadius,
    );
    const attackZone = this.calculatedRadius(
      this.indexSelectedCharacter,
      index,
      attackRadius,
    );

    for (let i = 0; i < 64; i++) {
      if (i !== this.indexSelectedCharacter) {
        this.gamePlay.deselectCell(i);
      }
    }

    if (index !== this.indexSelectedCharacter && movementZone) {
      this.gamePlay.selectCell(index, 'green');
      this.gamePlay.setCursor(cursors.pointer);
    } else {
      this.gamePlay.setCursor(cursors.notallowed);
    }

    if (foundCharacter) {
      const { character } = foundCharacter;

      if (!playerTypes.includes(character.type) && attackZone) {
        this.gamePlay.setCursor(cursors.crosshair);
        this.gamePlay.selectCell(index, 'red');
      } else if (!playerTypes.includes(character.type) && !attackZone) {
        this.gamePlay.setCursor(cursors.notallowed);
      } else {
        this.gamePlay.setCursor(cursors.pointer);
      }
    }
  }

  calculatedRadius(center, index, radius) {
    const coords = [];

    for (let i = -radius; i <= radius; i++) {
      for (let j = -radius; j <= radius; j++) {
        const cell = center + i + 8 * j;

        if (Math.ceil((cell + 1) / 8) === Math.ceil((center + 1 + 8 * j) / 8)) {
          coords.push(cell);
        }
      }
    }

    return coords.includes(index);
  }
}
