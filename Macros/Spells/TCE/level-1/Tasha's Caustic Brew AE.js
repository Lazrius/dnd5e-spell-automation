({
	name: "Tasha's Caustic Brew AE",
	id: "qr2sskuwjveniyu9",
	spellType: "aefx"
});
// @endmeta

// @include getTargetDae.js

console.log(args[0]);
switch (args[0]) {
	case "on": {
		const sequence = new Sequence();
		sequence
			.effect()
			.file("jb2a.markers.drop.dark_green.02")
			.attachTo(target)
			.scale(0.5)
			.persist()
			.name(`CausticBrew-${target.id}`)
			.fadeIn(300)
			.fadeOut(300)
			.extraEndDuration(800);
		await sequence.play();
		break;
	};

	case "off": {
		Sequencer.EffectManager.endEffects({ name: `CausticBrew-${target.id}`, object: target });
		break;
	};

	case "each": {
		const sequence = new Sequence();
		sequence.effect()
			.file('jb2a.liquid.splash.green')
			.attachTo(target)
			.scaleToObject(1.2)
			.fadeOut(300);

		sequence.play();

		const itemData = args[1].efData.flags.dae.itemData;
		const level = itemData.data.level;
		const damageRoll = await new Roll(`${level * 2}d4`).roll({async:true});

		itemData.data.components.concentration = false;
		new MidiQOL.DamageOnlyWorkflow(target.actor, target, damageRoll.total, "acid", [target], damageRoll, {flavor: "(Acid)" , itemData, itemCardId: "new"});

		break;
	};
}