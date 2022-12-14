({
	name: "Sending",
	id: "iegxhdcsbehany6b",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.impact.003.dark_red")
	.scaleToObject(2)
	.atLocation(casterToken);
sequence
	.effect()
	.file("jb2a.markers.runes.dark_red.01")
	.scaleToObject(2)
	.atLocation(casterToken)
	.fadeIn(500)
	.duration(2800)
	.fadeOut(500)
	.opacity(0.8);
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(args[0].tokenId)
	.duration(2800)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xc00000 })
	.opacity(0.8);
await sequence.play();
