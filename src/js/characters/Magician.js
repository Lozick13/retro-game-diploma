import Character from '../Character';
export class Magician extends Character {
  constructor(level) {
    super(level, 'Magician');

    this.attack = 10;
    this.defence = 40;
  }
}