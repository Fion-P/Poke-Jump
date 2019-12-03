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
  this.color = randomColor();
  this.accUp();
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
  // console.log(y)
  // this.accUp();
  this.accDown();
  // if (this.pos[1] < 400) {
  //   this.draw(ctx);
  // }
  
  if (y > 400) {
    y = 400;
  }
  // if (this.pos[1] < 10)
  this.pos[1] = y;
}

Character.prototype.accUp = function() {
  this.vel[1] -= 10;
};

Character.prototype.accDown = function () {
  // let y = this.pos[1] - this.vel[1];
  // this.pos[1] = y;
  // console.log("working");
  this.vel[1] += 0.4;
}

module.exports = Character;