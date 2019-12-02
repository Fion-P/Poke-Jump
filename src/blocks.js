const Block = require("./block");


function Blocks(position) {
  // this.pos = pos;
  Block.call(this, {
    color: "blue",
    pos: position.pos
    // console.log("working")
  });
}

module.exports = Blocks;
