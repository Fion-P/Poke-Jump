const Block = require("./block");
const Util = require("./util.js");
Util.inherits(Blocks, Block);

function Blocks(position) {
  // this.pos = pos;
  console.log("working")
  Block.call(this, {
    color: "blue",
    pos: position.pos,
    vel: Util.randomVec(5),
    // console.log("working")
  });
  console.log(Util.randomVec(5))
}

module.exports = Blocks;
