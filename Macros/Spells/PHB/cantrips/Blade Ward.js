({
	name: "Blade Ward",
	id: "247d7ktfu3edwl2p",
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

await sequence.play();