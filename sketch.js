var bar, ball, run, bricks, r, bons;

function setup() {
  var cnv = createCanvas(800, 750);
  cnv.position(300, 10);
  bar = new Bar();
  bricks = new Bricks();
  bricks.setup();
  ball = new Ball(bar.x + bar.len / 2, bar.y, bricks.brickh, bricks.brickl);
  run = true;
  bons = [];
}

function bonus() {
  r = floor(random(10));
  if (r === 0) {
    bons.push(new Bonus((ball.j + 0.5) * bricks.brickl, (ball.i - 0.5) * bricks.brickh));
    bons[bons.length - 1].setup();
  }
}

function draw() {
  background(50);
  if (run) {
    if (ball.y + ball.size / 2 > bar.y && ball.y + ball.size / 2 < bar.y + bar.h + abs(ball.yspeed) && ball.x > bar.x && ball.x < bar.x + bar.len) {
      ball.collisionBar(bar.x, bar.x + bar.len);
    }
    if (ball.yspeed > 0) {
      if (bricks.existe(ball.i + 1, ball.j)) {
        if (ball.y + ball.size / 2 > (ball.i + 1) * bricks.brickh) {
          ball.collisionVert();
          bricks.enleve(ball.i + 1, ball.j);
        }
      }
    } else {
      if (bricks.existe(ball.i - 1, ball.j)) {
        if (ball.y - ball.size / 2 < (ball.i + 0) * bricks.brickh) {
          ball.collisionVert();
          bricks.enleve(ball.i - 1, ball.j);
        }
      }
    }
    if (bricks.existe(ball.i, ball.j - 1) && ball.j != 0) {
      if (ball.x - ball.size / 2 < (ball.j) * bricks.brickl) {
        ball.collisionHor();
        bricks.enleve(ball.i, ball.j - 1);
      }
    }
    if (bricks.existe(ball.i, ball.j + 1) && ball.j != bricks.totl - 1) {
      if (ball.x + ball.size / 2 > (ball.j + 1) * bricks.brickl) {
        ball.collisionHor();
        bricks.enleve(ball.i, ball.j + 1);
      }
    }
    if (ball.y > height) {
      run = false;
    }
    ball.update();
    bar.update();
    if (bricks.n === 0) {
      console.log("gagné");
      this.setup();
    }
    for (var i = bons.length-1; i >= 0; i--) {
      bons[i].update();
      if (bons[i].y + bons[i].size / 2 > bar.y && bons[i].y + bons[i].size / 2 < bar.y + bar.h + abs(bons[i].speed) && bons[i].x > bar.x && bons[i].x < bar.x + bar.len) {
        bons[i].effect(bar);
        bons.splice(i, 1);
      } else if (bons[i].y > height) {
        bons.splice(i, 1);
      }
    }
    for (var i = bons.length-1; i >= 0; i--) {
      bons[i].show();
    }

    bricks.show();
    ball.show();
    bar.show();
  } else {
    console.log("perdu");
    this.setup();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    bar.setSpeed(-bar.xspeed);
    bar.move = true;
  }
  if (keyCode === RIGHT_ARROW) {
    bar.setSpeed(bar.xspeed);
    bar.move = true;
  }
}

function keyReleased(){
  if (keyCode === LEFT_ARROW) {
    if (bar.speed < 0) {
      bar.move = false;
      bar.setSpeed(0);
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if (bar.speed > 0) {
      bar.move = false;
      bar.setSpeed(0);
    }
  }
}
