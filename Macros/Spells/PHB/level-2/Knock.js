// @include getCasterToken.js

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
	.scaleIn(0, 500, { ease: "easeOutCubic" });
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0x800080 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.rainbow")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200)
	.belowTokens()
	.waitUntilFinished(-500);
sequence
	.effect()
	.file("jb2a.detect_magic.circle.purple")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.randomRotation();
await sequence.play();
