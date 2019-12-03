// export default class Block {
//   constructor(dimensions) {
//     this.dimensions = dimensions;
//   }

//   drawBackground(ctx) {
//     ctx.fillStyle = "skyblue";
//     ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
//   }
// }
//test
const Util = require("./util.js");

function Block(option) {
  // this.dimensions = option["dim"];
  this.color = option.color;
  this.pos = option.pos;
  this.vel = option["vel"];
  // console.log(option)
}


Block.prototype.draw = function (ctx) {
  // debugger;
  // console.log("working")
  ctx.beginPath();

  let [x, y] = this.pos;
  ctx.fillStyle = this.color;

  ctx.beginPath();
  ctx.rect(x, y, 50, 8);
  ctx.stroke();
  ctx.fill();
};

Block.prototype.move = function () {
  let x = this.pos[0] + this.vel[0];
  if (x > 500) {
    x = 0;
  }
  if (x < 0) {
    x = 500;
  }
  this.pos[0] = x;
  // this.pos[1] = y;

  

};



module.exports = Block;