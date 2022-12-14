({
	name: "Spare The Dying",
	id: "yehxruwtjoh8itb0",
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
	.fadeOut(500)
	.filter("Glow", { color: 0xFFFFA7 });
sequence
	.effect()
	.file("jb2a.cure_wounds.200px.blue")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject(3)
	.duration(1500)
	.waitUntilFinished(-800);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.extras.tmfx.outpulse.circle.01.slow")
		.attachTo(target)
		.filter("Glow", { color: 0xFFFFA7 })
		.fadeIn(100)
		.fadeOut(500)
		.scaleToObject(5)
		.belowTokens();
	sequence
		.effect()
		.file("jb2a.impact.004.yellow")
		.attachTo(target);
}

await sequence.play();
