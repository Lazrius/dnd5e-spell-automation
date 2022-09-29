({
	name: "Toll The Dead",
	id: "a9ts7siujcrg5ta4",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.impact.004.dark_purple")
	.atLocation(casterToken)
	.fadeIn(500);

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.necromancy")
	.atLocation(casterToken)
	.duration(3000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x3c1361 })
	.scaleIn(0, 500, { ease: "easeOutCubic" })
	.waitUntilFinished(-2000);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.toll_the_dead.purple.complete")
		.attachTo(target)
		.scaleIn(0, 500, { ease: "easeInCubic" })
		.fadeIn(500)
		.fadeOut(300);
}

await sequence.play();
