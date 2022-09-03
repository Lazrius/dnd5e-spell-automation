// @import getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x89F423 })
	.scaleIn(0, 500, {ease: "easeOutCubic", delay: 100});
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.green")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200);
sequence
	.effect()
	.file("jb2a.butterflies.many.green")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.duration(2000);
await sequence.play();
