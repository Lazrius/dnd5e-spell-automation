// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.abjuration")
	.atLocation(casterToken)
	.duration(1000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-500)
	.filter("Glow", { color: 0xabcdef });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.004.blue")
		.atLocation(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.energy_strands.complete.blueorange.01")
		.fadeIn(1000)
		.duration(10000)
		.fadeOut(1000)
		.scaleToObject(1.5)
		.atLocation(target)
		.randomRotation();
	await sequence.play();
}
