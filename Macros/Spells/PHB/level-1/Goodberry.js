({
	name: "Goodberry",
	id: "7foqep89uv4i9cv0",
	spellType: "static"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.4)
	.filter("Glow", { color: 0x98fb98 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.green")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200);
sequence
	.effect()
	.file("jb2a.fireflies.many.01.green")
	.atLocation(casterToken)
	.fadeIn(700)
	.fadeOut(700)
	.duration(4000)
	.scale(0.4);
await sequence.play();
