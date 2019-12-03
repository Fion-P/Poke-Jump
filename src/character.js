function randomColor() {
  const hexDigits = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 3; i++) {
    color += hexDigits[Math.floor((Math.random() * 16))];
  }

  return color;
}

// function randPos() {
//   let x = Math.random() * this.DIM_X;
//   // let y = (Math.random() * this.DIM_Y - 30) - 30;
//   return [x, 10];
// };

function Character(option) {
  this.pos = [250, 400];
  this.vel = [0, 0];
  this.radius = 15;
  this.color = "purple";
  // this.accUp();
  this.gameOver = false;
}



Character.prototype.draw = function (ctx) {

  ctx.beginPath();

  let [x, y] = this.pos;
  ctx.fillStyle = this.color;

  ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
  ctx.fill();
  
};


Character.prototype.move = function() {
  let y  = this.pos[1] + this.vel[1];
  let x = this.pos[0] + this.vel[0];
  // console.log(y)
  // this.accUp();
  this.accDown();
  // if (this.pos[1] < 400) {
  //   this.draw(ctx);
  // }

  if( y < 0 ) {
    y = 485;
  }
  if (y > 485) {
    y = 485;
  }
  if (x > 490) {
    // alert("game over");
    x = 475;
  }
  if (x < 0) {
    x = 25;
  }
  // if (this.pos[1] < 10)
  this.pos[0] = x
  this.pos[1] = y;
  // console.log(x)
}

Character.prototype.accUp = function() {
  if (this.vel[1] > -100) {
    // console.log("max")
    this.vel[1] -= 10;
  }
  this.vel[-1] = -100;
  console.log(this.vel[1])
};
Character.prototype.moveRight = function() {
  this.vel[0] += 10
  console.log(this.vel)
  // let x = this.pos[0] + this.vel[0];
  // this.pos[0] = x
};

Character.prototype.moveLeft = function() {
  this.vel[0] -= 10
  // let x = this.pos[0] - this.vel[0];
  // this.pos[0] = x
};

Character.prototype.accDown = function () {
  // let y = this.pos[1] - this.vel[1];
  // this.pos[1] = y;
  // console.log("working");
  if (this.vel[1] > 10) {
    this.vel[1] = 10
  }
  this.vel[1] += 0.4;
  // console.log(this.vel[1])
};


Character.prototype.outOfBounds = function() {
  let y = this.pos[1];
  console.log(y < 0)
  return y < 0;
}


module.exports = Character;