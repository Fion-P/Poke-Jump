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
/***/ (function(module, exports, __webpack_require__) {

eval("// export default class Block {\n//   constructor(dimensions) {\n//     this.dimensions = dimensions;\n//   }\n\n//   drawBackground(ctx) {\n//     ctx.fillStyle = \"skyblue\";\n//     ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n//   }\n// }\n//test\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Block(option) {\n  // this.dimensions = option[\"dim\"];\n  this.color = option.color;\n  this.pos = option.pos;\n  this.vel = option[\"vel\"];\n  // console.log(option)\n}\n\n\nBlock.prototype.draw = function (ctx) {\n  // debugger;\n  // console.log(\"working\")\n  ctx.beginPath();\n\n  let [x, y] = this.pos;\n  ctx.fillStyle = this.color;\n\n  ctx.beginPath();\n  ctx.rect(x, y, 50, 8);\n  ctx.stroke();\n  ctx.fill();\n};\n\nBlock.prototype.move = function () {\n  let x = this.pos[0] + this.vel[0];\n  if (x > 500) {\n    x = 0;\n  }\n  if (x < 0) {\n    x = 500;\n  }\n  this.pos[0] = x;\n  // this.pos[1] = y;\n\n  \n\n};\n\n\n\nmodule.exports = Block;\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Block = __webpack_require__(/*! ./block */ \"./src/block.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nUtil.inherits(Blocks, Block);\n\nfunction Blocks(position) {\n  // this.pos = pos;\n  Block.call(this, {\n    color: \"blue\",\n    pos: position.pos,\n    vel: Util.randomVec(5),\n    // console.log(\"working\")\n  });\n}\n\nmodule.exports = Blocks;\n\n\n//# sourceURL=webpack:///./src/blocks.js?");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function randomColor() {\n  const hexDigits = \"0123456789ABCDEF\";\n\n  let color = \"#\";\n  for (let i = 0; i < 3; i++) {\n    color += hexDigits[Math.floor((Math.random() * 16))];\n  }\n\n  return color;\n}\n\n// function randPos() {\n//   let x = Math.random() * this.DIM_X;\n//   // let y = (Math.random() * this.DIM_Y - 30) - 30;\n//   return [x, 10];\n// };\n\nfunction Character(option) {\n  this.pos = [250, 400];\n  this.vel = [0, 0];\n  this.radius = 15;\n  this.color = \"purple\";\n  // this.accUp();\n  this.gameOver = false;\n}\n\n\n\nCharacter.prototype.draw = function (ctx) {\n\n  ctx.beginPath();\n\n  let [x, y] = this.pos;\n  ctx.fillStyle = this.color;\n\n  ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);\n  ctx.fill();\n  \n};\n\n\nCharacter.prototype.move = function() {\n  let y  = this.pos[1] + this.vel[1];\n  let x = this.pos[0] + this.vel[0];\n  // console.log(y)\n  // this.accUp();\n  this.accDown();\n  // if (this.pos[1] < 400) {\n  //   this.draw(ctx);\n  // }\n\n  if( y < 0 ) {\n    y = 485;\n  }\n  if (y > 485) {\n    y = 485;\n  }\n  if (x > 490) {\n    // alert(\"game over\");\n    x = 475;\n  }\n  if (x < 0) {\n    x = 25;\n  }\n  // if (this.pos[1] < 10)\n  this.pos[0] = x\n  this.pos[1] = y;\n  // console.log(x)\n}\n\nCharacter.prototype.accUp = function() {\n  if (this.vel[1] > -2) {\n    // console.log(\"max\")\n    this.vel[1] -= 10;\n  }\n  this.vel[-1] = -2;\n  console.log(this.vel[1])\n};\nCharacter.prototype.moveRight = function() {\n  this.vel[0] += 10\n  console.log(this.vel)\n  // let x = this.pos[0] + this.vel[0];\n  // this.pos[0] = x\n};\n\nCharacter.prototype.moveLeft = function() {\n  this.vel[0] -= 10\n  // let x = this.pos[0] - this.vel[0];\n  // this.pos[0] = x\n};\n\nCharacter.prototype.accDown = function () {\n  // let y = this.pos[1] - this.vel[1];\n  // this.pos[1] = y;\n  // console.log(\"working\");\n  if (this.vel[1] > 10) {\n    this.vel[1] = 10\n  }\n  this.vel[1] += 0.4;\n  // console.log(this.vel[1])\n};\n\n\nCharacter.prototype.outOfBounds = function() {\n  let y = this.pos[1];\n  console.log(y < 0)\n  return y < 0;\n}\n\n\nmodule.exports = Character;\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Block = __webpack_require__(/*! ./block */ \"./src/block.js\");\nconst Blocks = __webpack_require__(/*! ./blocks */ \"./src/blocks.js\");\nconst Character = __webpack_require__(/*! ./character */ \"./src/character.js\");\n\nclass Game {\n  constructor(options) {\n    this.DIM_X = options.DIM_X;\n    this.DIM_Y = options.DIM_Y;\n    this.NUM_BLOCKS = 20;\n    this.blocks = [];\n    this.char = new Character;\n    this.addBlocks();\n  }\n\n  addBlocks() {\n    while (this.NUM_BLOCKS > 0) {\n      let pos = this.randomPosition();\n      this.NUM_BLOCKS--;\n      this.blocks.push(new Blocks({\n        pos: pos,\n      }));\n    }\n  }\n\n  randomPosition() {\n    let x = Math.random() * this.DIM_X;\n    let y = (Math.random() * this.DIM_Y - 30) - 30;\n    return [x, y];\n  }\n\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n    this.ctx.canvas.addEventListener(\"mousedown\", this.boundClickHandler);\n  }\n\n  click(e) {\n    // console.log(\"work\");\n    \n    this.char.accUp();\n  }\n\n  draw(ctx) {\n    // console.log(\"working\")\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n    for (let i = 0; i < this.blocks.length; i++) {\n      this.blocks[i].draw(ctx);\n    }\n    this.char.draw(ctx);\n  }\n\n  moveObjects() {\n    for (let i = 0; i < this.blocks.length; i++) {\n      this.blocks[i].move();\n    }\n    // if (this.char.pos[1] > 0) {\n    this.char.move();\n    // } else {\n    //   this.char.moveDown();\n    // }\n    // let that = this;\n    // setInterval(function () {\n    //   that.char.moveUp();\n    // },\n    //   2000\n    // );\n    // setInterval(function () {\n    //   that.char.moveDown();\n    // },\n    //   20\n    // );\n\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// const Game = require('./game.js');\n\n\nconst game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  DIM_X: 500,\n  DIM_Y: 500,\n  NUM_BLOCKS: 10\n});\n\nclass GameView {\n  constructor(canvas) {\n    // const canvas = document.getElementById('poke-jump');\n    const ctx = canvas.getContext(\"2d\");\n    this.game;\n    this.ctx = ctx;\n    this.canvas =canvas\n    this.registerEvents();\n    // this.start();\n    this.startGame();\n    \n  }\n\n  startGame() {\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      DIM_X: 500,\n      DIM_Y: 500,\n      NUM_BLOCKS: 10\n    });\n\n    this.start();\n\n  }\n\n  restart() {\n    this.running = false;\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      DIM_X: 500,\n      DIM_Y: 500,\n      NUM_BLOCKS: 10\n    });\n\n    this.start();\n  }\n\n  gameOver() {\n    return this.game.char.outOfBounds();\n  }\n \n  start() {\n    // debugger\n    let that = this;\n    // that.game.draw(that.ctx);\n    setInterval(function () {\n      that.game.draw(that.ctx);\n      that.game.moveObjects();\n    },\n      20\n    );\n    console.log(this.game.char.gameOver);\n    console.log(this.game.char.pos);\n    if (this.gameOver()) {\n      alert(\"game over\");\n      // this.startGame();\n      this.restart()\n    }\n\n    if (this.running) {\n      //This calls this function again, after around 1/60th of a second\n      requestAnimationFrame(this.start.bind(this));\n    }\n    \n  }\n\n  registerEvents(e) {\n    this.boundKeyHandler = this.keyDown.bind(this);\n    this.boundKeyUpHandler = this.keyUp.bind(this);\n    window.addEventListener(\"keydown\", this.boundKeyHandler);\n    window.addEventListener(\"keyup\", this.boundKeyUpHandler );\n  }\n\n  keyDown(e) {\n    console.log(\"work\");\n    if (e.keyCode === 32 || e.keyCode === 38) {\n      this.game.char.accUp();\n    }\n    if (e.keyCode === 39) {\n      this.game.char.moveRight();\n    }\n    if (e.keyCode === 37) {\n      this.game.char.moveLeft();\n    }\n  }\n\n  keyUp(e) {\n    if (e.keyCode === 32 || e.keyCode === 38) {\n      this.game.char.accDown();\n    }\n    if (e.keyCode === 37) {\n      this.game.char.moveRight();\n    }\n    if (e.keyCode === 39) {\n      this.game.char.moveLeft();\n    }\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\n\n\nconsole.log(\"Webpack is working!\");\n\n\n// const canvas = document.getElementById('poke-jump');\n// new GameView(canvas);\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('poke-jump');\n  // const ctx = canvas.getContext(\"2d\");\n\n  // const GameView = require('./game_view.js');\n  const view = new _game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  // view.start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });