
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.light.intro.green")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500);
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0x243FD6 })
	.opacity(0.5);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.hunters_mark.loop.02.blue")
		.scaleIn(0, 500, { ease: "easeOutCubic" })
		.fadeOut(500)
		.scaleToObject(1)
		.attachTo(target)
		.opacity(0.5);
}

await sequence.play();
