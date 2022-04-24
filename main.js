//import Game from "./game.js";
//contains all of the DOM

// query selectors

var tile1 = document.getElementById("1");
var tile2 = document.getElementById("2");
var tile3 = document.getElementById("3");
var tile4 = document.getElementById("4");
var tile5 = document.getElementById("5");
var tile6 = document.getElementById("6");
var tile7 = document.getElementById("7");
var tile8 = document.getElementById("8");
var tile9 = document.getElementById("9");

var resetButton = document.getElementById("resetButton");

var tile1Image = tile1.getElementsByTagName('img')[0];
var tile2Image = tile2.getElementsByTagName('img')[0];
var tile3Image = tile3.getElementsByTagName('img')[0];
var tile4Image = tile4.getElementsByTagName('img')[0];
var tile5Image = tile5.getElementsByTagName('img')[0];
var tile6Image = tile6.getElementsByTagName('img')[0];
var tile7Image = tile7.getElementsByTagName('img')[0];
var tile8Image = tile8.getElementsByTagName('img')[0];
var tile9Image = tile9.getElementsByTagName('img')[0];

var tileImages = [
  [tile1Image, tile2Image, tile3Image],
  [tile4Image, tile5Image, tile6Image],
  [tile7Image, tile8Image, tile9Image],
]


// event listeners

resetButton.addEventListener("click", resetGame)

tile1.addEventListener("click", handleTile1Click)
tile2.addEventListener("click", handleTile2Click)
tile3.addEventListener("click", handleTile3Click)
tile4.addEventListener("click", handleTile4Click)
tile5.addEventListener("click", handleTile5Click)
tile6.addEventListener("click", handleTile6Click)
tile7.addEventListener("click", handleTile7Click)
tile8.addEventListener("click", handleTile8Click)
tile9.addEventListener("click", handleTile9Click)

//this is the initial start of your logic
var game = new Game();
renderUI();

function handleTile1Click() {
  handleTileClick(0, 0)
}

function handleTile2Click() {
  handleTileClick(0, 1)
}

function handleTile3Click() {
  handleTileClick(0, 2)
}

function handleTile4Click() {
  handleTileClick(1, 0)
}

function handleTile5Click() {
  handleTileClick(1, 1)
}

function handleTile6Click() {
  handleTileClick(1, 2)
}

function handleTile7Click() {
  handleTileClick(2, 0)
}

function handleTile8Click() {
  handleTileClick(2, 1)
}

function handleTile9Click() {
  handleTileClick(2, 2)
}

function handleTileClick(clickEvent) {
  const tile = clickEvent.target
  // get x and y from tile element. Add them to the div tag
}

function handleTileClick(x, y) {
  game.handleClickOnTile(x, y);
  renderUI();
}

function renderUI() {
  renderBoard();
  if (game.isGameOver) {
    resetButton.style.visibility = "visible";
  } else {
    resetButton.style.visibility = "hidden";
  }
  // update ui here
}

function renderBoard() {
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      tileImages[x][y].src = getTileImage(game.board.tiles[x][y])
    }
  }
}

function getTileImage(tileToken) {
  if (tileToken === USA_TOKEN) {
    return "assets/icons8-usa-100.svg"
  } else if (tileToken === CANADA_TOKEN) {
    return "assets/icons8-canada-100.svg"
  } else {
    return '';
  }
}

function resetGame() {
  game.reset();
  renderUI();

}
//display function using Game object
//grab board from the game and iterate through to get every tile
//set the correct tile image on the UI

//create a function to call Game.reset
//Game.reset instantiates a new board
//Game.reset update isGameOver to false;

//create central board on the DOM
//connect Game data model to the DOM
//display the Player data in the sidebars
//automatically reset the board to allow for a new game to be played after previous game won