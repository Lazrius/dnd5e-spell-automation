({
	name: "Cold Dagger",
	id: "s8ivpxkt19t83050",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

await Sequencer.Preloader.preloadForClients(
	["jb2a.ice_spikes.radial.burst.blue",
		"jb2a.dagger.melee.02.blue",
		"jb2a.side_impact.ice_shard.blue"
	], false);

//This uses MIDI QOL to check for Hits before playing certain parts

let target = canvas.tokens.get(args[0].targets[0].id);
//midi checking for hit.
let targetHit = args[0].hitTargets.length === 1;

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.dagger.melee.02.blue")
	.atLocation(casterToken)
	.stretchTo(target)
	.filter("Glow", { color: 0x0047AB })
	.waitUntilFinished(-1500)
	.missed(args[0].hitTargets.length === 0);

sequence
	.effect()
	.file("jb2a.ice_spikes.radial.burst.blue")
	.attachTo(target)
	.scaleToObject()
	.fadeIn(500)
	.fadeOut(300)
	.playIf(targetHit);

sequence
	.effect()
	.file("jb2a.side_impact.ice_shard.blue")
	.attachTo(target)
	.rotateTowards(target)
	.stretchTo(casterToken)
	.rotate(180)

	.playIf(targetHit);

await sequence.play();
