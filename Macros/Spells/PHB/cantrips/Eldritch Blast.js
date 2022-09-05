({
	name: "Eldritch Blast",
	id: "hgf6pvrzgn6cgo4b",
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
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xff0000 })
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.energy_strands.complete.dark_red.01")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.eldritch_blast.dark_red")
		.atLocation(casterToken)
		.stretchTo(target);

	sequence
		.effect()
		.file("jb2a.static_electricity.02.red")
		.atLocation(target)
		.fadeIn(500)
		.fadeOut(500)
		.delay(1000)
		.scaleToObject();
}

await sequence.play();
