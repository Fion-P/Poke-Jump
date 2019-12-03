const Block = require('./block');
const Blocks = require('./blocks');
const Character = require('./character');

class Game {
  constructor(options) {
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.NUM_BLOCKS = 20;
    this.blocks = [];
    this.char = new Character;
    this.addBlocks();
  }

  addBlocks() {
    while (this.NUM_BLOCKS > 0) {
      let pos = this.randomPosition();
      this.NUM_BLOCKS--;
      this.blocks.push(new Blocks({
        pos: pos,
      }));
    }
  }

  randomPosition() {
    let x = Math.random() * this.DIM_X;
    let y = (Math.random() * this.DIM_Y - 30) - 30;
    return [x, y];
  }

  registerEvents() {
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    // console.log("work");
    
    this.char.accUp();
  }

  draw(ctx) {
    // console.log("working")
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].draw(ctx);
    }
    this.char.draw(ctx);
  }

  moveObjects() {
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


  }
}

export default Game;