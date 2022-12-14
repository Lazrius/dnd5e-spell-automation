({
	name: "Shadow Of Moil Attack",
	id: "vcze7e18bbsat5pq",
	spellType: "range"
});
// @endmeta
await Sequencer.Preloader.preloadForClients([
	"jb2a.energy_strands.complete.dark_red.01",
	"jb2a.energy_strands.range.standard.dark_red.01"
], false);

// remove the damage from the Shadow of Moil Chat Card, Create a new item and add the damage to it then apply the attack macro to that

// @include getCasterToken.js

let target = Array.from(game.user.targets)[0];
//Delete the comment on this line, formatting breaks the layout
//let damageTotal = game.modules.get("midi-qol").damageRoll ?.total ?? 16;

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.energy_strands.complete.dark_red.01")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject();

sequence
	.effect()
	.file("jb2a.energy_strands.range.standard.dark_red.01")
	.repeats(Math.max(1, Math.floor(damageTotal / 2)), 100, 200)
	.randomizeMirrorY()
	.attachTo(target)
	.stretchTo(casterToken)
	.playIf(args[0].hitTargets.length === 1); // Comment this line out if not using MIDI
await sequence.play();
