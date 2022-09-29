({
	name: "Lesser Restoration",
	id: "2r318nk15rgzvx15",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.abjuration")
	.atLocation(casterToken)
	.fadeIn(500)
	.scaleIn(0, 300, { ease: "easeOutCubic" })
	.scaleToObject(4)
	.duration(1000)
	.fadeOut(500);
sequence
	.effect()
	.file("jb2a.energy_strands.overlay.blue.01")
	.atLocation(casterToken)
	.fadeIn(500)
	.scaleToObject(4)
	.duration(1000)
	.fadeOut(500);
sequence
	.effect()
	.file("jb2a.cure_wounds.400px.blue")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject(3)
	.duration(1500)
	.waitUntilFinished(-1000);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.003.blue")
		.attachTo(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.healing_generic.loop.bluewhite")
		.attachTo(target)
		.fadeIn(500)
		.fadeOut(500)
		.scaleToObject(3)
		.belowTokens()
		.opacity(0.5);
	sequence
		.effect()
		.file("jb2a.healing_generic.burst.bluewhite")
		.attachTo(target)
		.fadeIn(500)
		.fadeOut(500)
		.scaleToObject(3)
		.opacity(0.5);
}
await sequence.play();
