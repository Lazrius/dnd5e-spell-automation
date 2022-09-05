({
	name: "Zone Of Truth",
	id: "tpkprbc1ojg6s6gd",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xa1c4fd })
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.markers.light.intro.blue")
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.7);

sequence
	.effect()
	.file("jb2a.extras.tmfx.border.circle.outpulse.01.normal")
	.attachTo(casterToken)
	.fadeIn(500)
	.filter("Glow", { color: 0xa1c4fd })
	.fadeOut(500)
	.scale(1.25)
	.opacity(0.3)
	.belowTokens()
	.persist();

await sequence.play();
