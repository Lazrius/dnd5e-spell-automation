({
	name: "Primal Savagery",
	id: "2z3yb4dhf2wvfvay",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.butterflies.many.red")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.duration(4000)
	.scale(0.8);
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0xc00000 });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.003.dark_red")
		.attachTo(target)
		.fadeIn(100);
	sequence
		.effect()
		.file("jb2a.claws.200px.dark_red")
		.attachTo(target)
		.fadeIn(500)
		.scaleToObject(1.5)
		.duration(2000)
		.fadeOut(500);
}
await sequence.play();
