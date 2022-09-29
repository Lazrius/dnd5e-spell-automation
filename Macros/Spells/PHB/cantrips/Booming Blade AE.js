({
	name: "Booming Blade AE",
	id: "9nq7to9swupcgiz8",
	spellType: "aefx"
});
// @endmeta

// @include getTargetDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.static_electricity.01.blue")
		.scale(0.4)
		.attachTo(target)
		.fadeIn(500)
		.fadeOut(1000)
		.name(`booming-blade-${target.id}`)
		.persist();
	await sequence.play();
}

else if (args[0] === "off") {
// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `booming-blade-${target.id}`, object: target.id });
}
