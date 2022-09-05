({
	name: "Jump",
	id: "u1izlvn7n16nvox5",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-1000)
	.filter("Glow", { color: 0xadd8e6 });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.004.dark_purple")
		.atLocation(target)
		.fadeIn(100)
		.fadeOut(200);
	sequence
		.effect()
		.file("jb2a.markers.light.loop.blue")
		.atLocation(target)
		.fadeIn(100)
		.fadeOut(200)
		.belowTokens()
		.scaleToObject(1.5)
		.animateProperty("spriteContainer", "rotation", { from: 0, to: 360, duration: 5000, delay: 0 });
}
await sequence.play();
