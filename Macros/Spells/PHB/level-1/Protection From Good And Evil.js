({
	name: "Protection From Good And Evil Start",
	id: "lbxynsouoad6d80b",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", { color: 0xf9e076 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.markers.light.intro.yellow")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.scaleToObject(2)
	.waitUntilFinished(-500);
await sequence.play();
