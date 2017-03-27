function Bonus(x, y) {
  this.speed = 3;
  this.size = 50;
  this.x = x;
  this.y = y;
  this.type;

  //0 raccourcir barre
  //1 élargir barre
  //2 rajout de balle
  //3 mode camion

  this.setup = function() {
    this.type = floor(random(4));
  }

  this.update = function() {
      this.y += this.speed;
  }

  this.show = function() {
    switch (this.type) {
      case 0:
        fill(255, 170, 0);
        break;
      case 1:
        fill(0, 170, 255);
        break;
      case 2:
        fill(255,85,255);
        break;
      case 3:
        fill(0);
        break;
    }
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.effect = function(bar) {
    switch (this.type) {
      case 0:
        bar.len = 75;
        break;
      case 1:
        bar.len = 225;
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

}
