({
	name: "Longstrider",
	id: "bcee3p2okqt5hb4v",
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
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xffa500 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.007.orange")
		.atLocation(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.impact.007.orange")
		.atLocation(target)
		.fadeIn(500)
		.file("jb2a.token_border.circle.spinning.orange.008")
		.atLocation(target)
		.fadeIn(500)
		.scaleToObject(2, 2.2)
		.duration(5000)
		.fadeOut(1000)
		.belowTokens()
		.randomRotation();
}
await sequence.play();
