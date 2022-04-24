class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }
  increaseWins() {
    this.wins++;
  }
}

//id(ex: 'one')
//token(ex: emoji)

//increaseWins - increases the count of the player's wins