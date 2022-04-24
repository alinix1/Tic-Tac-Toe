const USA_TOKEN = "usaFlag";
const CANADA_TOKEN = "canadianFlag";

class Game {
  constructor() {
    this.playerOne = new Player(1, USA_TOKEN);
    this.playerTwo = new Player(2, CANADA_TOKEN);
    this.board = new Board();
    this.currentPlayerId = this.playerOne.id;
    this.isGameOver = false;
  }
  reset() {
    this.board = new Board();
    this.isGameOver = false;
  }
  handleClickOnTile(x, y) {
    if (this.isGameOver) {
      return;
    }
    console.log(`Clicked tile: ${x}, ${y}`)
    var currentPlayer = this.playerTwo;
    var nextPlayerId = this.playerOne.id;
    if (this.currentPlayerId === this.playerOne.id) {
      currentPlayer = this.playerOne;
      nextPlayerId = this.playerTwo.id;
    }
    if (this.board.makePlayerMove(x, y, currentPlayer)) {
      this.currentPlayerId = nextPlayerId;
      switch (this.board.getWinState()) {
        case IN_PROGRESS: //nothing more to do
          break;
        case TIE:
          this.isGameOver = true;
          console.log("Game Over: TIE");
          break;
        case this.playerOne.token:
          this.isGameOver = true;
          this.playerOne.increaseWins();
          console.log("Player One Wins");
          break;
        case this.playerTwo.token:
          this.isGameOver = true;
          this.playerTwo.increaseWins();
          console.log("Player Two Wins");
          break;
      }
    }
    console.log(`Updated tiles: ${this.board.tiles}`)
  }
}

//two Player instances
//method or way to keep track of the data for game board
//method or way to keep track of which player's turn it is
//method to check Game's board data for win conditions
//method to detect when a game is a draw (no one wins)
//method to reset the Game's board to begin a new game