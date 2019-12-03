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
    this.game;
    this.ctx = ctx;
    this.canvas =canvas
    this.registerEvents();
    // this.start();
    this.startGame();
    
  }

  startGame() {
    this.game = new Game({
      DIM_X: 500,
      DIM_Y: 500,
      NUM_BLOCKS: 10
    });

    this.start();

  }

  restart() {
    this.running = false;
    this.game = new Game({
      DIM_X: 500,
      DIM_Y: 500,
      NUM_BLOCKS: 10
    });

    this.start();
  }

  gameOver() {
    return this.game.char.outOfBounds();
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
    console.log(this.game.char.gameOver);
    console.log(this.game.char.pos);
    if (this.gameOver()) {
      alert("game over");
      // this.startGame();
      this.restart()
    }

    if (this.running) {
      //This calls this function again, after around 1/60th of a second
      requestAnimationFrame(this.start.bind(this));
    }
    
  }

  registerEvents(e) {
    this.boundKeyHandler = this.keyDown.bind(this);
    this.boundKeyUpHandler = this.keyUp.bind(this);
    window.addEventListener("keydown", this.boundKeyHandler);
    window.addEventListener("keyup", this.boundKeyUpHandler );
  }

  keyDown(e) {
    console.log("work");
    if (e.keyCode === 32 || e.keyCode === 38) {
      this.game.char.accUp();
    }
    if (e.keyCode === 39) {
      this.game.char.moveRight();
    }
    if (e.keyCode === 37) {
      this.game.char.moveLeft();
    }
  }

  keyUp(e) {
    if (e.keyCode === 32 || e.keyCode === 38) {
      this.game.char.accDown();
    }
    if (e.keyCode === 37) {
      this.game.char.moveRight();
    }
    if (e.keyCode === 39) {
      this.game.char.moveLeft();
    }
  }
}


export default GameView;