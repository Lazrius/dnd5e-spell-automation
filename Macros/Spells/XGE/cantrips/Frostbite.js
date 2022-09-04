// @include getCasterToken.js
// @include getTargets.js
const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(3000)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject(2)
	.filter("Glow", { color: 0xd9f1ff });
sequence
	.effect()
	.file("jb2a.shield_themed.above.ice.01.blue")
	.atLocation(casterToken)
	.fadeIn(500)
	.duration(3000)
	.fadeOut(500)
	.scaleToObject(1.5)
	.opacity(0.8);
sequence
	.effect()
	.file("jb2a.shield_themed.below.ice.01.blue")
	.atLocation(casterToken)
	.fadeIn(500)
	.duration(3000)
	.fadeOut(500)
	.scaleToObject(1.5)
	.opacity(0.8)
	.waitUntilFinished(-500);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.extras.tmfx.inpulse.circle.04.normal")
		.atLocation(target)
		.duration(3000)
		.fadeIn(500)
		.fadeOut(500)
		.scaleToObject(3)
		.filter("Glow", { color: 0xd9f1ff });
	sequence
		.effect()
		.file("jb2a.ice_spikes.radial.burst.white")
		.atLocation(target)
		.duration(1500)
		.fadeOut(500)
		.scaleToObject(1.5);
}

await sequence.play();
