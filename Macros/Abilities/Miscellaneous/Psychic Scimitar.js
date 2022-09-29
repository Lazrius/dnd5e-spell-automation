({
	name: "Psychic Scimitar",
	id: "poy59bqr9nctkd4j",
	spellType: "range"
});
// @endmeta
await Sequencer.Preloader.preloadForClients(
	["jb2a.scimitar.melee.01.purple",
		"jb2a.markers.01.purplepink"
	], false);

//This uses MIDI QOL to check for Hits before playing certain parts

// @include getCasterToken.js

let target = canvas.tokens.get(args[0].targets[0].id);

//midi checking for hit.
let targetHit = args[0].hitTargets.length === 1;

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.scimitar.melee.01.purple")
	.atLocation(casterToken)
	.stretchTo(target)
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.impact.004.pinkpurple")
	.attachTo(target)
	.fadeIn(500)
	.fadeOut(300)
	.playIf(targetHit);

sequence
	.effect()
	.file("jb2a.markers.01.purplepink")
	.attachTo(target)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(300)
	.playIf(targetHit);

await sequence.play();
