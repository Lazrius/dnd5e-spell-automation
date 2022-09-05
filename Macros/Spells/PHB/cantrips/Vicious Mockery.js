({
	name: "Vicious Mockery",
	id: "jbwa1jav1xtovcni",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.markers.music.dark_red")
	.atLocation(casterToken)
	.duration(3500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.belowTokens();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0xcd5c5c });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.004.dark_red")
		.atLocation(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.energy_strands.overlay.dark_red.01")
		.delay(200)
		.fadeIn(300)
		.fadeOut(500)
		.duration(3000)
		.scale(0.4)
		.opacity(0.4)
		.atLocation(target)
		.scaleIn(0, 500, { ease: "easeOutCubic" });
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.simple.enchantment")
		.atLocation(target)
		.fadeIn(500)
		.scaleIn(0, 300, { ease: "easeOutCubic" })
		.scaleToObject(2)
		.duration(2000)
		.fadeOut(500)
		.filter("Glow", { color: 0xcd5c5c });
}
await sequence.play();
