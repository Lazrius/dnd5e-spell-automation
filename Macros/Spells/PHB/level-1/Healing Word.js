({
	name: "Healing Word",
	id: "727pblrzb3ft0afm",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
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
		.attachTo(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.healing_generic.400px.blue")
		.fadeIn(100)
		.fadeOut(100)
		.scale(0.4, 0.45)
		.attachTo(target)
		.randomRotation();
}

await sequence.play();
