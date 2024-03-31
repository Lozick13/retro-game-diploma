import { Bowman } from '../../characters/Bowman';
import { Daemon } from '../../characters/Daemon';
import { Magician } from '../../characters/Magician';
import { Swordsman } from '../../characters/Swordsman';
import { Undead } from '../../characters/Undead';
import { Vampire } from '../../characters/Vampire';

test('Create Character Daemon', () => {
  const daemon = new Daemon(1);
  expect(daemon.type).toBe('Daemon');
});

test('Create Character Bowman', () => {
  const bowman = new Bowman(1);
  expect(bowman.type).toBe('Bowman');
});

test('Create Character Magician', () => {
  const magician = new Magician(1);
  expect(magician.type).toBe('Magician');
});

test('Create Character Swordsman', () => {
  const swordsman = new Swordsman(1);
  expect(swordsman.type).toBe('Swordsman');
});

test('Create Character Undead', () => {
  const undead = new Undead(1);
  expect(undead.type).toBe('Undead');
});

test('Create Character Vampire', () => {
  const vampire = new Vampire(1);
  expect(vampire.type).toBe('Vampire');
});
