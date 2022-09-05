({
	name: "Disguise Self",
	id: "0w4lom70s3ne7a5y",
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
	.file("jb2a.extras.tmfx.runes.circle.outpulse.illusion")
	.atLocation(args[0].tokenId)
	.duration(2800)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xadd8e6 })
	.opacity(0.8);
await sequence.play();
