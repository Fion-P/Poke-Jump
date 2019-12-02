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

function Block(option) {
  // this.dimensions = option["dim"];
  this.color = option.color;
  this.pos = option.pos;

}


Block.prototype.draw = function (ctx) {
  // debugger;
  console.log("working")
  ctx.beginPath();

  let [x, y] = this.pos;
  ctx.fillStyle = this.color;

  ctx.beginPath();
  ctx.rect(x, y, 30, 5);
  ctx.stroke();
  ctx.fill();

};

module.exports = Block;