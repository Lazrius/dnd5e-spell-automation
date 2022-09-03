// @import getCasterToken.js
// @import getTargets.js

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.energy_strands.overlay.purple.01")
	.delay(200)
	.fadeIn(300)
	.fadeOut(500)
	.duration(3000)
	.scale(0.4)
	.atLocation(casterToken)
	.scaleIn(0, 500, {ease: "easeOutCubic"});

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.necromancy")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", {color: 0x800080});

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.moonbeam.01.intro.blue")
		.atLocation(target)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200)
		.belowTokens()
		.waitUntilFinished(-500);
	sequence
		.effect()
		.delay(500)
		.file("jb2a.impact.007.purple")
		.atLocation(target)
		.fadeIn(100)
		.fadeOut(200);
	sequence
		.effect()
		.file("jb2a.arcane_hand.purple")
		.scale(0.3)
		.atLocation(target)
		.fadeIn(500)
		.fadeOut(500)
		.duration(1500)
		.opacity(0.5);
}
await sequence.play();

