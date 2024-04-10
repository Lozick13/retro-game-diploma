import { Bowman } from '../../characters/Bowman';
import { Daemon } from '../../characters/Daemon';
import { Magician } from '../../characters/Magician';
import { Swordsman } from '../../characters/Swordsman';
import { Undead } from '../../characters/Undead';
import { Vampire } from '../../characters/Vampire';

describe('Create new Character', () => {
  test('daemon', () => {
    const daemon = new Daemon(1);
    expect(`Attack: ${daemon.attack}, defence: ${daemon.defence}`).toBe(
      'Attack: 10, defence: 10',
    );
  });

  test('bowman', () => {
    const bowman = new Bowman(1);
    expect(`Attack: ${bowman.attack}, defence: ${bowman.defence}`).toBe(
      'Attack: 25, defence: 25',
    );
  });

  test('magician', () => {
    const magician = new Magician(1);
    expect(`Attack: ${magician.attack}, defence: ${magician.defence}`).toBe(
      'Attack: 10, defence: 40',
    );
  });

  test('swordsman', () => {
    const swordsman = new Swordsman(1);
    expect(`Attack: ${swordsman.attack}, defence: ${swordsman.defence}`).toBe(
      'Attack: 40, defence: 10',
    );
  });

  test('undead', () => {
    const undead = new Undead(1);
    expect(`Attack: ${undead.attack}, defence: ${undead.defence}`).toBe(
      'Attack: 40, defence: 10',
    );
  });

  test('vampire', () => {
    const vampire = new Vampire(1);
    expect(`Attack: ${vampire.attack}, defence: ${vampire.defence}`).toBe(
      'Attack: 25, defence: 25',
    );
  });
});
