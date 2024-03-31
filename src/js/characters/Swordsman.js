import Character from '../Character';
export class Swordsman extends Character {
  constructor(level) {
    super(level, 'Swordsman');

    this.attack = 40;
    this.defence = 10;
  }
}
