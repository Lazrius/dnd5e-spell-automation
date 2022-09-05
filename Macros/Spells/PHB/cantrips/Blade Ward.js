({
	name: "Blade Ward",
	id: "fndwbi0dqync3eui",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.abjuration")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xD7E5F0 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });

sequence
	.effect()
	.file("jb2a.shimmer.01.blue")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(500)
	.duration(1900)
	.scaleToObject(1.5);
sequence
	.effect()
	.file("jb2a.impact.010.blue")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200);

await sequence.play();
