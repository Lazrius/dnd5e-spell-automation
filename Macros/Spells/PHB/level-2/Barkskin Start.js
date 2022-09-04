// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.transmutation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", { color: 0x98fb98 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.green")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(500)
	.duration(1200)
	.waitUntilFinished(-500);
await sequence.play();
