import Character from '../Character';
export class Vampire extends Character {
  constructor(level) {
    super(level, 'Vampire');

    this.attack = 25;
    this.defence = 25;
  }
}
