({
	name: "Beast Bond",
	id: "u272x9iis93ohjhs",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.divination")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", { color: 0x76d669 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.green")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200)
	.waitUntilFinished(-500);
sequence
	.effect()
	.file("jb2a.particles.outward.greenyellow.01.02")
	.scale(0.45)
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.duration(1500)
	.belowTokens();
await sequence.play();
