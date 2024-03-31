import Character from '../Character';
export class Undead extends Character {
  constructor(level) {
    super(level, 'Undead');

    this.attack = 40;
    this.defence = 10;
  }
}
