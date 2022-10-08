({
	name: "Mage Armor AE",
	id: "k4z8wy0pqfqqf1pj",
	spellType: "aefx"
});
// @endmeta

// @include getTargetDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.energy_field.02.above.blue")
		.attachTo(target)
		.scaleToObject(1.5)
		.opacity(0.3)
		.persist()
		.name(`mage-armor-${target.id}`)
		.fadeIn(1000)
		.fadeOut(1000);
	await sequence.play();
}

else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `mage-armor-${target.id}`, object: target });
}

