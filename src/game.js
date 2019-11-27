import Block from './blocks';

export default class PokeJump {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }


  restart() {
    // this.running = false;
    // this.score = 0;
    // this.bird = new Bird(this.dimensions);
    this.level = new Level(this.dimensions);
    this.level.animate(this.ctx);
    // this.animate();
  }
}
