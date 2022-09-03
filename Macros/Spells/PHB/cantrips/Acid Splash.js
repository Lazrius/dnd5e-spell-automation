// @import getCasterToken.js
// @import getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.conjuration")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", {color: 0x89F423})
	.scaleIn(0, 500, {ease: "easeOutCubic", delay: 100});

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.liquid.splash_side.green")
		.atLocation(casterToken)
		.rotateTowards(target)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5);

	sequence
		.effect()
		.file("jb2a.bullet.03.green")
		.atLocation(casterToken)
		.stretchTo(target)
		.waitUntilFinished(-500);

	sequence
		.effect()
		.file("jb2a.liquid.splash.bright_green")
		.atLocation(target)
		.fadeIn(500)
		.fadeOut(500)
		.scaleToObject(1.5);
}

await sequence.play();
