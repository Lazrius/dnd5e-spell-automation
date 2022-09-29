({
	name: "Animal Friendship",
	id: "rlzi27d7bvach5qt",
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
	.filter("Glow", { color: 0x014421 });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.moonbeam.01.intro.green")
		.attachTo(target)
		.fadeIn(100)
		.fadeOut(200)
		.belowTokens()
		.scaleToObject(1.5)
		.animateProperty("spriteContainer", "rotation", { from: 0, to: 360, duration: 5000, delay: 0 });
	sequence
		.effect()
		.file("jb2a.shatter.green")
		.delay(200)
		.fadeIn(100)
		.fadeOut(500)
		.duration(1200)
		.scale(0.4)
		.opacity(0.4)
		.attachTo(target);
}
await sequence.play();
