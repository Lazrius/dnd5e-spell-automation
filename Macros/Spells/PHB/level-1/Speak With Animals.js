({
	name: "Speak With Animals",
	id: "enqet3nuifdp8h9o",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.divination")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0x014421 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.green")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.belowTokens()
	.scaleToObject(1.5)
	.animateProperty("spriteContainer", "rotation", { from: 0, to: 360, duration: 5000, delay: 0 });
sequence
	.effect()
	.file("jb2a.shatter.green")
	.delay(200)
	.fadeIn(100)
	.fadeOut(500)
	.duration(1200)
	.scale(0.4)
	.opacity(0.4)
	.atLocation(casterToken);
await sequence.play();
