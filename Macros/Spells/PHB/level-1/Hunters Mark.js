({
	name: "Hunter's Mark",
	id: "okpi5lrz12burasz",
	spellType: "aefx"
});
// @endmeta

// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.light.intro.green")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500);
sequence
	.effect()
	.file("jb2a.hunters_mark.pulse.02.blue")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0xfefebe })
	.opacity(0.5);
	
await sequence.play();