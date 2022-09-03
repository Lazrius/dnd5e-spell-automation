// @import getCasterToken.js
// @import getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x5e899e })
	.opacity(0.8)
	.waitUntilFinished(-1000);
sequence
	.effect()
	.file("jb2a.static_electricity.02.blue")
	.atLocation(casterToken)
	.belowTokens()
	.fadeOut(500)
	.duration(1800)
	.fadeIn(500)
	.scale(0.7);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.011.blue")
		.atLocation(target)
		.scaleToObject(2);
}
await sequence.play();
