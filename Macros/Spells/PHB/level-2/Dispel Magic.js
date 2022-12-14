({
	name: "Dispel Magic",
	id: "tskdl1e2uyh685cj",
	spellType: "range"
});
// @endmeta
const casterToken = canvas.tokens.get(args[0].tokenId);

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xffffff })
	.scaleIn(0, 500, {ease: "easeOutCubic", delay: 100});
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
	.file("jb2a.detect_magic.circle.grey")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.duration(2500)
	.randomRotation(); 
await sequence.play();
