({
	name: "Second Wind",
	id: "6j4g0yiwgsm97vfx",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.impact.004.blue")
	.atLocation(casterToken)
	.fadeIn(500);
sequence
	.effect()
	.file("jb2a.healing_generic.400px.green")
	.fadeIn(100)
	.fadeOut(100)
	.scale(0.4, 0.45)
	.atLocation(casterToken)
	.randomRotation();
await sequence.play();
