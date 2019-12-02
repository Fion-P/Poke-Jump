const Game = require('./game.js');

let GameView = function (game, ctx) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function () {
  // debugger
  let that = this;
    that.game.draw(that.ctx);

};

module.exports = GameView;