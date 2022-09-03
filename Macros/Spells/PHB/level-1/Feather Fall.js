// @import getCasterToken.js
// @import getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.rainbow")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(500)
	.duration(1200); 
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-500)
	.filter("Glow", { color: 0xffffbf });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.007.yellow")
		.fadeIn(100)
		.fadeOut(100)
		.scale(0.4, 0.45)
		.atLocation(target)
		.randomRotation();
}
await sequence.play();
