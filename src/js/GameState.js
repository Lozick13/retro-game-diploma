export default class GameState {
  constructor() {
    this.player = 'player';
  }
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'player' ? 'computer' : 'player';
  }
  // static from(object) {
  //   return null;
  // }
}
