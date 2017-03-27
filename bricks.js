function Bricks() {
  this.h = 300;
  this.brickh = 60;
  this.brickl = 80;
  this.brick = [];
  var toth = this.h / this.brickh;
  var totl = width / this.brickl;
  this.n = toth * totl;
  var r;

  this.setup = function() {
    for (var i = 2; i < toth; i++) {
      for (var j = 0; j < totl; j++) {
        r = floor(random(4));
        this.brick[i * totl + j] = r;
        if (r === 0) {
          this.n--;
        }
      }
    }
  }

  this.existe = function(i, j) {
    return (this.brick[i * totl + j] > 0);
  }

  this.enleve = function(i, j) {
    this.brick[i * totl + j]--;
    if (this.brick[i * totl + j] === 0) {
      this.n--;
    }
    bonus();
  }

  this.show = function() {
    for (var i = 0; i < toth; i++) {
      for (var j = 0; j < totl; j++) {
        if (this.brick[i * totl + j] > 0) {
          switch (this.brick[i * totl + j]) {
            case 1:
              fill(0, 255, 50);
              break;
            case 2:
              fill(255, 255, 0);
              break;
            case 3:
              fill(255, 0, 0);
              break;
          }
          rect(j * this.brickl, i * this.brickh, this.brickl, this.brickh);
        }
      }
    }
  }
}
