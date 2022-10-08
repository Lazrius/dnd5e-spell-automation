({
	name: "Sanctuary AE",
	id: "xu06zjl8myoiirkd",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.energy_field.02.below.blue")
		.attachTo(target)
		.scale(0.5)
		.persist()
		.name(`sanctuary-${target.id}`)
		.fadeIn(300)
		.fadeOut(3000)
		.opacity(0.7);
	await sequence.play();
}

if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `sanctuary-${target.id}`, object: target });
}

