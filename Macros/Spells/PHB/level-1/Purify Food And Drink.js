({
	name: "Purify Food And Drink",
	id: "mi4997dd2j7k7g1r",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.bubble.outro.rainbow")
	.scaleToObject(2)
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.belowTokens();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(args[0].tokenId)
	.duration(2800)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xadd8e6 })
	.opacity(0.8);
sequence
	.effect()
	.file("jb2a.extras.tmfx.outpulse.circle.02.normal")
	.atLocation(args[0].tokenId)
	.duration(2800)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xadd8e6 })
	.opacity(0.8);
await sequence.play();
