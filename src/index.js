import PokeJump from './game';
import Block from './blocks';

const canvas = document.getElementById('poke-jump');
const ctx = canvasEl.getContext("2d");
new PokeJump(canvas);