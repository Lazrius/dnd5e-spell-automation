// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject(2)
	.filter("Glow", { color: 0x26abff });

sequence
	.effect()
	.file("jb2a.energy_strands.complete.blue.01")
	.atLocation(casterToken)
	.fadeIn(500)
	.duration(2200)
	.fadeOut(500)
	.scaleToObject(2)
	.waitUntilFinished(-500);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.ray_of_frost.blue")
		.atLocation(casterToken)
		.stretchTo(target);
}

await sequence.play();
