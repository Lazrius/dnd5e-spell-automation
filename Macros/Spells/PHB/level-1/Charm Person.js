({
	name: "Charm Person",
	id: "zuwxmkjff8sdwwv2",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0xfadadd });
for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.moonbeam.01.intro.rainbow")
		.atLocation(target)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200);
	sequence
		.effect()
		.file("jb2a.energy_strands.overlay.pinkyellow.01")
		.delay(200)
		.fadeIn(300)
		.fadeOut(500)
		.duration(3000)
		.scale(0.4)
		.opacity(0.4)
		.atLocation(target)
		.scaleIn(0, 500, { ease: "easeOutCubic" });
}
await sequence.play();
