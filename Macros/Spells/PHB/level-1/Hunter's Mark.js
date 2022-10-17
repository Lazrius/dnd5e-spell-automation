({
	name: "Hunter's Mark",
	id: "okpi5lrz12burasz",
	spellType: "range"
});
// @endmeta

// @include getCasterToken.js
// @include getTargets.js

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

const effectData = {
	changes: [
		{key: "flags.midi-qol.huntersMark", mode: 5, value: targets.values().next().value.document.uuid, priority: 20},
		{key: "flags.dnd5e.DamageBonusMacro", mode: 0, value: `\"Compendium.dnd5e-spell-automation.Macros.Hunter's Mark Damage Bonus\"`, priority: 20}
	],
    
	origin: workflow.itemUuid,
	disabled: false,
	duration: workflow.item.effects.entries().next().value.duration,
	icon: workflow.item.img,
	label: workflow.item.name
};
await actor.createEmbeddedDocuments("ActiveEffect", [effectData]);