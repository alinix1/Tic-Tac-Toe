const TIE = 'tie'
const IN_PROGRESS = 'in_progress'

class Board {
  constructor() {
    this.tiles = createTiles();
  }
  makePlayerMove(x, y, player) {
    if (this.tiles[x][y] === '') {
      this.tiles[x][y] = player.token;
      return true;
    } else {
      return false;
    }
  }
  getWinState() {
    for (var i = 0; i < 3; i++) {
      if (this.tiles[i][0] !== '' && this.tiles[i][0] === this.tiles[i][1] &&
        this.tiles[i][0] === this.tiles[i][2]) {
        return this.tiles[i][0];
      } else if (this.tiles[0][i] !== '' && this.tiles[0][i] === this.tiles[1][i] &&
        this.tiles[0][i] === this.tiles[2][i]) {
        return this.tiles[0][i];
      }
    }
    if (this.tiles[0][0] !== '' && this.tiles[0][0] === this.tiles[1][1] &&
      this.tiles[0][0] === this.tiles[2][2]) {
      return this.tiles[0][0];
    } else if (this.tiles[0][2] !== '' && this.tiles[0][2] === this.tiles[1][1] &&
      this.tiles[0][2] === this.tiles[2][0]) {
      return this.tiles[0][2];
    }
    if (this.hasEmptyTiles()) {
      return IN_PROGRESS;
    } else {
      return TIE;
    }
  }
  hasEmptyTiles() {
    for (var row = 0; row < 3; row++) {
      for (var column = 0; column < 3; column++) {
        if (this.tiles[row][column] === '') {
          return true;
        }
      }
    }
    return false;
  }
}

function createTiles() {
  var tiles = [];
  for (var i = 0; i < 3; i++) {
    var row = ['', '', ''];
    tiles.push(row);
  }
  return tiles;
}