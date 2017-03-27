function Ball(x, y, h, l) {
  this.size = 20;
  this.x = x;
  this.y = y - this.size / 2;
  this.angle =  - PI / 10;
  this.yspeed = - 6;
  this.j = floor(x / l);
  this.i = floor(y / h);

  this.collisionBar = function(a, b) {
    var m = map(this.x, a, b, - PI / 4, PI / 4)
    this.angle = - this.angle + m;
    var a = map(this.angle, - PI / 2, PI / 2, - 4 *PI / 10, 4 * PI / 10);
    this.angle = a;
    this.yspeed = - this.yspeed;
  }

  this.collisionVert = function() {
    this.angle = - this.angle;
    this.yspeed = - this.yspeed;
  }

  this.collisionHor = function() {
    this.angle = - this.angle;
  }

  this.update = function() {
    if (this.y < 1) {
      this.angle = - this.angle;
      this.yspeed = - this.yspeed;
    }
    this.y += this.yspeed;
    if (this.x < 1) {
      this.angle = - this.angle;
    } else if (this.x > width -1) {
      this.angle = - this.angle;
    }
    this.x += - tan(this.angle) * this.yspeed;
    this.j = floor(this.x / l);
    this.i = floor(this.y / h);
  }

  this.show = function() {
    fill(255,100,255);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
