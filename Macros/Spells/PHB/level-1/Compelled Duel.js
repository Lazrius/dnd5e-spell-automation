// @import getCasterToken.js
// @import getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.outpulse.circle.02.normal")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xadadad })
	.belowTokens();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
	.atLocation(casterToken)
	.duration(3700)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject(2)
	.waitUntilFinished(-3500)
	.filter("Glow", { color: 0xadadad });

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.003.blue")
		.atLocation(target)
		.fadeIn(500);
	sequence
		.effect()
		.file("jb2a.extras.tmfx.inpulse.circle.02.normal")
		.atLocation(target)
		.duration(3500)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.filter("Glow", {color: 0xadadad})
		.belowTokens();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
		.atLocation(target)
		.fadeIn(500)
		.scaleIn(0, 300, {ease: "easeOutCubic"})
		.scaleToObject(2)
		.duration(3500)
		.fadeOut(500)
		.filter("Glow", {color: 0xadadad})
		.scaleIn(0, 300, {ease: "easeOutCubic"});
}

await sequence.play();
