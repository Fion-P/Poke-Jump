


import GameView from "./game_view.js";
console.log("Webpack is working!");


// const canvas = document.getElementById('poke-jump');
// new GameView(canvas);

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('poke-jump');
  // const ctx = canvas.getContext("2d");

  // const GameView = require('./game_view.js');
  const view = new GameView(canvas);
  view.start();

});