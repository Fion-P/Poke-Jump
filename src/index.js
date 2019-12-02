


console.log("Webpack is working!")
const canvas = document.getElementById('poke-jump');
const ctx = canvas.getContext("2d");

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('poke-jump');
  const ctx = canvas.getContext("2d");
  const Game = require('./game.js');
  const game = new Game({
    DIM_X: 500,
    DIM_Y: 500,
    NUM_BLOCKS: 10
  });

  const GameView = require('./game_view.js');
  const view = new GameView(game, ctx);
  view.start();


  window.view = view;
  window.game = game;
  window.ctx = ctx;
  window.Game = Game;
  window.GameView = GameView;
});