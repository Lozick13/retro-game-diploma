import Character from '../../Character';

test('Inability to create a new character', () => {
  let errorMessage;

  try {
    new Character(1);
  } catch (e) {
    errorMessage = e.message;
  }
  expect(errorMessage).toBe('It is forbidden to create a class Character');
});
