import Sequence from "../../../dist/module/sequencer.js";

// @include getCasterToken.js

let target = Array.from(game.user.targets)[0];
//let targetImg = Array.from(game.user.targets)[0].data.img;

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.sword.melee.01.white")
	.atLocation(casterToken)
	.stretchTo(target)
	.filter("Glow", { color: 0xffa700 })
	.waitUntilFinished(-500)
	.size(canvas.grid.size * 2);

sequence
	.effect()
	.from(target)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.atLocation(target)
	.filter("Glow", { color: 0xffa700 })
	.scaleToObject()
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.flames.01.orange")
	.filter("Glow", { color: 0xffa700 })
	.atLocation(target)
	.fadeIn(500)
	.fadeOut(500)
	.waitUntilFinished(-1500)
	.duration(1000);

await sequence.play();
