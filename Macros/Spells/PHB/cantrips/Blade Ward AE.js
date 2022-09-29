({
	name: "Blade Ward AE",
	id: "1uvkzdxrpral35dc",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if (args[0] === "on") {
	const sequence = new Sequence();

	sequence
		.effect()
		.file("jb2a.shimmer.01.blue")
		.attachTo(target)
		.fadeIn(100)
		.fadeOut(500)
		.duration(1900)
		.scaleToObject(1.5);
	sequence
		.effect()
		.file("jb2a.impact.010.blue")
		.attachTo(target)
		.fadeIn(100)
		.fadeOut(200);
	sequence
		.effect()
		.file("jb2a.token_stage.round.blue.01.01")
		.attachTo(target)
		.scaleToObject(1.5)
		.persist()
		.name(`blade-ward-${target.id}`)
		.fadeIn(1000)
		.fadeOut(500)
		.opacity(0.8)
		.playbackRate(0.1);
	await sequence.play();
}

if (args[0] === "off") {
	await Sequencer.EffectManager.endEffects({name: `blade-ward-${target.id}`, object: target});
}
