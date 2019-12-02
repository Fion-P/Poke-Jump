/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// export default class Block {\n//   constructor(dimensions) {\n//     this.dimensions = dimensions;\n//   }\n\n//   drawBackground(ctx) {\n//     ctx.fillStyle = \"skyblue\";\n//     ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n//   }\n// }\n//test\n\nfunction Block(option) {\n  // this.dimensions = option[\"dim\"];\n  this.color = option.color;\n  this.pos = option.pos;\n\n}\n\n\nBlock.prototype.draw = function (ctx) {\n  // debugger;\n  console.log(\"working\")\n  ctx.beginPath();\n\n  let [x, y] = this.pos;\n  ctx.fillStyle = this.color;\n\n  ctx.beginPath();\n  ctx.rect(x, y, 50, 8);\n  ctx.stroke();\n  ctx.fill();\n\n};\n\nmodule.exports = Block;\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import Blocks from './blocks';\n\n// export default class PokeJump {\n//   constructor(canvas) {\n//     this.ctx = canvas.getContext(\"2d\");\n//     this.dimensions = { width: canvas.width, height: canvas.height };\n//     this.restart();\n//   }\n// }\nconst Block = __webpack_require__(/*! ./block */ \"./src/block.js\");\n\nlet Game = function (options) {\n  this.DIM_X = options.DIM_X;\n  this.DIM_Y = options.DIM_Y;\n  this.NUM_BLOCKS = options.NUM_BLOCKS;\n  this.blocks = [];\n  this.addBlocks();\n};\n\nGame.prototype.addBlocks = function () {\n  while (this.NUM_BLOCKS > 0) {\n    let pos = this.randomPosition();\n    this.NUM_BLOCKS--;\n    this.blocks.push(new Block({ \n      pos: pos,\n      color: \"blue\"}));\n  }\n};\n\nGame.prototype.randomPosition = function () {\n  let x = Math.random() * this.DIM_X;\n  let y = Math.random() * this.DIM_Y;\n  return [x, y];\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  ctx.fillStyle = \"skyblue\";\n  ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n  for (let i = 0; i < this.blocks.length; i++) {\n    this.blocks[i].draw(ctx);\n  }\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nlet GameView = function (game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n};\n\nGameView.prototype.start = function () {\n  // debugger\n  let that = this;\n  that.game.draw(that.ctx);\n\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\n\nconsole.log(\"Webpack is working!\")\nconst canvas = document.getElementById('poke-jump');\nconst ctx = canvas.getContext(\"2d\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('poke-jump');\n  const ctx = canvas.getContext(\"2d\");\n  const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n  const game = new Game({\n    DIM_X: 500,\n    DIM_Y: 500,\n    NUM_BLOCKS: 10\n  });\n\n  const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n  const view = new GameView(game, ctx);\n  view.start();\n\n\n  window.view = view;\n  window.game = game;\n  window.ctx = ctx;\n  window.Game = Game;\n  window.GameView = GameView;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });