function Cell(x, y, w, playerColor = '') {
  this.occupied = false;
  this.playerColor = playerColor
  this.x = x;
  this.y = y;
  this.w = w;
}

Cell.prototype.show = function() {
  stroke(0)
  if(this.playerColor != '') {
    fill(this.playerColor)
  }
  else {
    fill(255)
  }
  rect(this.x, this.y, this.w, this.w)
}

Cell.prototype.unoccupy = function() {
  this.occupied = false;
  this.playerColor = '';
}

Cell.prototype.occupy = function(playerColor) {
  this.occupied = true;
  this.playerColor = playerColor;
}
