({
	name: "False Life",
	id: "3pi8ht12kszczd8y",
	spellType: "static"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.impact.004.dark_purple")
	.atLocation(casterToken)
	.fadeIn(500);
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.necromancy")
	.atLocation(casterToken)
	.duration(3000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x3c1361 })
	.scaleIn(0, 500, { ease: "easeOutCubic" })
	.waitUntilFinished(-2000);
sequence
	.effect()
	.file('jb2a.icon.skull.purple')
	.atLocation(casterToken)
	.duration(3000)
	.fadeIn(500)
	.fadeOut(300)
	.scaleToObject();

sequence.play();