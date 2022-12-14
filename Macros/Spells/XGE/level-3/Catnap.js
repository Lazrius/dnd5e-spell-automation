({
	name: "Catnap",
	id: "8q9xsvc7ypon6qez",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x98fb98 })
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
	.file("jb2a.hunters_mark.pulse.02.green")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0xfefebe })
	.opacity(0.5);
sequence
	.effect()
	.file("jb2a.detect_magic.circle.green")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.duration(2500)
	.scale(0.5)
	.randomRotation();
await sequence.play();
