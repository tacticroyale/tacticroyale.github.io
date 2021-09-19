function playerData(color) {
  this.color = color;
  this.alive = true;
  this.health = 3;
  this.ap = 1;
  this.position = [10,10];
  this.realName = "KFC";
}

playerData.prototype.move = function(x, y) {
  if(alive && ap > 0) {
    if(x == position[0] && y == position[1]) {
     console.log("invalid move");
    return 0;
    }
    else if(abs(position[0] - x) >= 10 && abs(position[1] - y) >= 10) {
      ap -= 1;
      position = [x, y]
    }
  }
}


function playerList() {
  this.players = [];
}

playerList.prototype.initialize = function(rows, cols, playerCount, colorList) {
  for(var i = 0; i < this.playerCount; i++) {
    var randomX = floor(random(this.rows));
    var randomY = floor(random(this.cols));
    grid[randomX][randomY].occupy(this.colorList[i]);
    this.players[i] = playerData(this.colorList[i]);
  }
}
