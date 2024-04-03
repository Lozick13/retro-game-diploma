import { Swordsman } from './characters/Swordsman';
import { Bowman } from './characters/Bowman';
import { Magician } from './characters/Magician';
import { Daemon } from './characters/Daemon';
import { Undead } from './characters/Undead';
import { Vampire } from './characters/Vampire';
import Team from './Team';

/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const characterType = {
      swordsman: Swordsman,
      bowman: Bowman,
      magician: Magician,
      daemon: Daemon,
      undead: Undead,
      vampire: Vampire,
    };
    const selectedType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    const level = Math.floor(Math.random() * maxLevel) + 1;

    if (!characterType[selectedType]) {
      throw new Error('Invalid type');
    }

    yield new characterType[selectedType](level);
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns Object  хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];
  const generator = characterGenerator(allowedTypes, maxLevel);

  for (let i = 0; i < characterCount; i++) {
    team.push(generator.next().value);
  }

  return new Team(team);
}
