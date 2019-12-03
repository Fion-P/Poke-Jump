const Block = require("./block");
const Util = require("./util.js");
Util.inherits(Blocks, Block);

function Blocks(position) {
  // this.pos = pos;
  Block.call(this, {
    color: "blue",
    pos: position.pos,
    vel: Util.randomVec(5),
    // console.log("working")
  });
}

module.exports = Blocks;
