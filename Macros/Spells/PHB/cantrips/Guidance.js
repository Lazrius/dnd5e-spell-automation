({
	name: "Guidance",
	id: "87p459z4hg2fqtor",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.divination")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xffffbf })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });

sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.rainbow")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200)
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.extras.tmfx.outpulse.circle.01.slow")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.filter("Glow", { color: 0xffffbf })
	.opacity(0.8);

sequence
	.effect()
	.file("jb2a.bless.200px.intro.yellow")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.belowTokens()
	.scaleToObject(2)
	.opacity(0.4)
	.scaleIn(0, 500, { ease: "easeOutCubic" })
	.waitUntilFinished(-500);

await sequence.play();
