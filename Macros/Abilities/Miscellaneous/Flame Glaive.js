({
	name: "Flame Glaive",
	id: "90oixn7cw7jut16f",
	spellType: "range"
});
// @endmeta
await Sequencer.Preloader.preloadForClients(
	["jb2a.glaive.melee.01.orange",
		"jb2a.flames.01.orange"
	], false);

//This uses MIDI QOL to check for Hits before playing certain parts
// @include getCasterToken.js

let target = canvas.tokens.get(args[0].targets[0].id);
//midi checking for hit.
let targetHit = args[0].hitTargets.length === 1;

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.glaive.melee.01.orange")
	.atLocation(casterToken)
	.stretchTo(target)
	.filter("Glow", { color: 0xFFC300 })
	.waitUntilFinished(-500);

sequence
	.effect()
	.from(target)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.attachTo(target)
	.filter("Glow", { color: 0xFFC300 })
	.playIf(targetHit);

sequence
	.effect()
	.file("jb2a.flames.01.orange")
	.attachTo(target)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(300)
	.playIf(targetHit);

await sequence.play();
