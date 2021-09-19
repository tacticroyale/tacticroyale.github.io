var rows = 15;
var cols = 15;
var w = 100;
settings = new gameSettings();
var grid = [];
var colorList = ['red', 'blue', 'black', 'orange', 'pink', 'grey', 'purple', 'brown', 'yellow'];


function setup() {
  createCanvas(w * rows, w* cols);
  for (var i = 0; i < cols; i++) {
    grid[i] = [];
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * w, j * w, w);
    }
  }
  playerList.initialize(rows, cols, settings.playerCount, colorList);
}

function draw()
{
  background(220);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
        grid[i][j].show()
    }
  }
}
