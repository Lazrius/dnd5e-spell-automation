({
	name: "Ensnaring Strike AE",
	id: "zba674svnjrrkhbz",
	spellType: "aefx"
});
// @endmeta

// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file('jb2a.markers.light.loop.green')
		.name(`ensaring-strike-${target.id}`)
		.scaleToObject()
		.persist();
	
	await sequence.play();
}

else if (args[0] === "each") {
	const itemData = args[1].efData.flags.dae.itemData;
	const level = itemData.data.level;
	const damageRoll = await new Roll(`${level}d6`).roll({async:true});

	itemData.data.components.concentration = false;
	new MidiQOL.DamageOnlyWorkflow(target.actor, target, damageRoll.total, "piercing", [target], damageRoll, {flavor: "(Piercing)" , itemData, itemCardId: "new"});

	const sequence = new Sequence();
	sequence
		.effect()
		.file('jb2a.swirling_leaves.complete.01.green.1')
		.scaleToObject();

	await sequence.play();
}
	
else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `ensaring-strike-${target.id}`, object: target });
} 
