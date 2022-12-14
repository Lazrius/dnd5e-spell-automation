({
	name: "Mage Armor",
	id: "0kujd3hwd2o957d3",
	spellType: "range"
});
// @endmeta

// @include getCasterToken.js
const sequence = new Sequence();
sequence.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", { color: 0xffffff })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.blue")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200)
	.waitUntilFinished(-500);
sequence
	.effect()
	.file("jb2a.shield.02.intro.blue")
	.opacity(0.4)
	.scale(0.45)
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500);

await sequence.play();