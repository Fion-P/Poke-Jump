// import Blocks from './blocks';

// export default class PokeJump {
//   constructor(canvas) {
//     this.ctx = canvas.getContext("2d");
//     this.dimensions = { width: canvas.width, height: canvas.height };
//     this.restart();
//   }
// }
const Block = require('./block');

let Game = function (options) {
  this.DIM_X = options.DIM_X;
  this.DIM_Y = options.DIM_Y;
  this.NUM_BLOCKS = options.NUM_BLOCKS;
  this.blocks = [];
  this.addBlocks();
};

Game.prototype.addBlocks = function () {
  while (this.NUM_BLOCKS > 0) {
    let pos = this.randomPosition();
    this.NUM_BLOCKS--;
    this.blocks.push(new Block({ 
      pos: pos,
      color: "blue"}));
  }
};

Game.prototype.randomPosition = function () {
  let x = Math.random() * this.DIM_X;
  let y = Math.random() * this.DIM_Y;
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  // console.log("working")
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  // this.drawBackground(ctx);
  // console.log(this.blocks);
  for (let i = 0; i < this.blocks.length; i++) {
    this.blocks[i].draw(ctx);
  }
};

module.exports = Game;
