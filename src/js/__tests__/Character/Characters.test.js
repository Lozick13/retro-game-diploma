import { Bowman } from '../../characters/Bowman';
import { Daemon } from '../../characters/Daemon';
import { Magician } from '../../characters/Magician';
import { Swordsman } from '../../characters/Swordsman';
import { Undead } from '../../characters/Undead';
import { Vampire } from '../../characters/Vampire';

test('Create Character daemon', () => {
  const daemon = new Daemon(1);
  const result = `Attack: ${daemon.attack}, defence: ${daemon.defence}`;

  expect(result).toBe('Attack: 10, defence: 10');
});

test('Create Character bowman', () => {
  const bowman = new Bowman(1);
  const result = `Attack: ${bowman.attack}, defence: ${bowman.defence}`;

  expect(result).toBe('Attack: 25, defence: 25');
});

test('Create Character magician', () => {
  const magician = new Magician(1);
  const result = `Attack: ${magician.attack}, defence: ${magician.defence}`;

  expect(result).toBe('Attack: 10, defence: 40');
});

test('Create Character swordsman', () => {
  const swordsman = new Swordsman(1);
  const result = `Attack: ${swordsman.attack}, defence: ${swordsman.defence}`;

  expect(result).toBe('Attack: 40, defence: 10');
});

test('Create Character undead', () => {
  const undead = new Undead(1);
  const result = `Attack: ${undead.attack}, defence: ${undead.defence}`;

  expect(result).toBe('Attack: 40, defence: 10');
});

test('Create Character vampire', () => {
  const vampire = new Vampire(1);
  const result = `Attack: ${vampire.attack}, defence: ${vampire.defence}`;

  expect(result).toBe('Attack: 25, defence: 25');
});
