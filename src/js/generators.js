import { Swordsman } from './characters/Swordsman';
import { Bowman } from './characters/Bowman';
import { Magician } from './characters/Magician';
import { Daemon } from './characters/Daemon';
import { Undead } from './characters/Undead';
import { Vampire } from './characters/Vampire';

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
  const characterType = {
    Swordsman: Swordsman,
    Bowman: Bowman,
    Magician: Magician,
    Daemon: Daemon,
    Undead: Undead,
    Vampire: Vampire,
  };
  const selectedType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  const level = Math.floor(Math.random() * maxLevel) + 1;

  if (!characterType[selectedType]) {
    throw new Error('Invalid type');
  }

  yield new characterType[selectedType](level);
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {}
