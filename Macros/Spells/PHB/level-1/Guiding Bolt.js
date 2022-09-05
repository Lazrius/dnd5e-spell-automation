({
	name: "Guiding Bolt",
	id: "qbsatenzs9h6l5a2",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

let target = Array.from(game.user.targets)[0];

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.light.intro.yellow")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(1000)
	.belowTokens();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xffffbf })
	.waitUntilFinished(-500);
sequence
	.effect()
	.file("jb2a.guiding_bolt.01.blueyellow")
	.fadeIn(500)
	.fadeOut(300)
	.atLocation(casterToken)
	.stretchTo(target)
	.playIf(args[0].hitTargets.length === 1); // Comment this line out if not using MIDI
await sequence.play();
