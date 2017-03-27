function Bar() {
  this.len = 150;
  this.x = width / 2 - this.len / 2;
  this.h = 8;
  this.y = height - this.h - 30;
  this.speed = 0;
  this.move = false;
  this.xspeed = 8;

  this.update = function() {
    if (this.move) {
      if (this.x > -1 && this.speed <= 0) {
        this.x += this.speed;
      } else if (this.x + this.len < width +1 && this.speed >= 0) {
        this.x += this.speed;
      }
    }
  }



  this.setSpeed = function(s) {
    this.speed = s;
  }

  this.show = function() {
    fill(240);
    rect(this.x, this.y, this.len, this.h);
  }
}
