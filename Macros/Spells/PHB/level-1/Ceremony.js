({
	name: "Ceremony",
	id: "u9kt683ve3ek713e",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.abjuration")
	.atLocation(casterToken)
	.duration(1000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-500)
	.filter("Glow", { color: 0xabcdef });

await sequence.play();