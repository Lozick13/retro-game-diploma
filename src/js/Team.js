import Character from './Character';

/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
export default class Team {
  constructor(characters) {
    for (const character of characters) {
      if (!(character instanceof Character)) {
        throw new Error('characters must be instance of Character or its children');
      }
    }

    this._characters = characters;
  }

  get characters() {
    return this._characters;
  }

  set characters(character) {
    this._characters.push(character);
  }
}
