({
	name: "Light",
	id: "nhbr0zzon1mr0eds",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xffa500 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.rainbow")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200);

sequence.play();