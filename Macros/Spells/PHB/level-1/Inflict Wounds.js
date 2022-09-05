({
	name: "Inflict Wounds",
	id: "rdwkv92s08dm6dk4",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.necromancy")
	.atLocation(casterToken)
	.fadeIn(500)
	.scaleIn(0, 300, { ease: "easeOutCubic" })
	.scaleToObject(4)
	.duration(1000)
	.fadeOut(500);
sequence
	.effect()
	.file("jb2a.cure_wounds.400px.red")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject(3)
	.duration(1500)
	.waitUntilFinished(-800);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.003.dark_red")
		.atLocation(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.impact.004.dark_red")
		.atLocation(target)
		.fadeIn(500)
		.file("jb2a.portals.horizontal.ring.dark_red")
		.atLocation(target)
		.fadeIn(500)
		.scaleIn(0, 300, { ease: "easeOutCubic" })
		.scaleToObject(2, 2.2)
		.duration(2500)
		.fadeOut(500)
		.belowTokens()
		.randomRotation();
}
await sequence.play();
