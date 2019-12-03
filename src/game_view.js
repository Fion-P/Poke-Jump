// const Game = require('./game.js');
import Game from './game.js';

const game = new Game({
  DIM_X: 500,
  DIM_Y: 500,
  NUM_BLOCKS: 10
});

class GameView {
  constructor(canvas) {
    // const canvas = document.getElementById('poke-jump');
    const ctx = canvas.getContext("2d");
    this.game = game;
    this.ctx = ctx;
    this.canvas =canvas
    this.registerEvents();
  }

  start() {
    // debugger
    let that = this;
    // that.game.draw(that.ctx);
    setInterval(function () {
      that.game.draw(that.ctx);
      that.game.moveObjects();
    },
      20
    );
    
  }

  registerEvents(e) {
    this.boundClickHandler = this.click.bind(this);
    window.addEventListener("keydown", this.boundClickHandler);
  }

  click(e) {
    console.log("work");
    if (e.keyCode == 32) {
      this.game.char.accUp();
    }
  }
}


export default GameView;