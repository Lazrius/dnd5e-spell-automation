({
	name: "Bane",
	id: "v15vkquib1dr8ndx",
	spellType: "range"
});
// @endmeta

// @include getCasterToken.js

const sequence = new Sequence(); 
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0xf02d2b });

await sequence.play();