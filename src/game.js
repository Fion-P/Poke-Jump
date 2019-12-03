// import Blocks from './blocks';

// export default class PokeJump {
//   constructor(canvas) {
//     this.ctx = canvas.getContext("2d");
//     this.dimensions = { width: canvas.width, height: canvas.height };
//     this.restart();
//   }
// }
const Block = require('./block');
const Blocks = require('./blocks');
const Character = require('./character');

let Game = function (options) {
  this.DIM_X = options.DIM_X;
  this.DIM_Y = options.DIM_Y;
  this.NUM_BLOCKS = options.NUM_BLOCKS;
  this.blocks = [];
  this.char = new Character;
  this.addBlocks();
};

Game.prototype.addBlocks = function () {
  while (this.NUM_BLOCKS > 0) {
    let pos = this.randomPosition();
    this.NUM_BLOCKS--;
    this.blocks.push(new Blocks({ 
      pos: pos,
      }));
  }
};

Game.prototype.randomPosition = function () {
  let x = Math.random() * this.DIM_X;
  let y = (Math.random() * this.DIM_Y-30) - 30;
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  for (let i = 0; i < this.blocks.length; i++) {
    this.blocks[i].draw(ctx);
  }
  this.char.draw(ctx);
};

Game.prototype.moveObjects = function () {
  for (let i = 0; i < this.blocks.length; i++) {
    this.blocks[i].move();
  }
  // if (this.char.pos[1] > 0) {
    this.char.move();
  // } else {
  //   this.char.moveDown();
  // }
  // let that = this;
  // setInterval(function () {
  //   that.char.moveUp();
  // },
  //   2000
  // );
  // setInterval(function () {
  //   that.char.moveDown();
  // },
  //   20
  // );

  
};

module.exports = Game;
