({
	name: "Hold Person",
	id: "pnc9agq0vkn8lm4g",
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
	.filter("Glow", { color: 0xc00000 });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.004.dark_red")
		.atLocation(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.static_electricity.01.red")
		.atLocation(target)
		.fadeIn(500)
		.duration(2000)
		.fadeOut(500)
		.scale(0.4)
		.opacity(0.8);
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.simple.enchantment")
		.atLocation(target)
		.fadeIn(500)
		.scaleIn(0, 300, { ease: "easeOutCubic" })
		.scaleToObject(2)
		.duration(2000)
		.fadeOut(500)
		.filter("Glow", { color: 0xc00000 });
}

await sequence.play();
