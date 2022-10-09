({
	name: "Dissonant Whispers",
	id: "l7eh22793nphfo59",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x8b00FF })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.markers.skull.purple.01")
		.attachTo(target)
		.fadeIn(100)
		.fadeOut(500)
		.waitUntilFinished(-500);
}

await sequence.play();
