({
	name: "Shield Of Faith AE",
	id: "d7fblb0c9reqcn04",
	spellType: "aefx"
});
// @endmeta

// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.shield.02.intro.yellow")
		.attachTo(target)
		.scale(0.5)
		.waitUntilFinished(-500)
		.opacity(0.7);
	sequence
		.effect()
		.file("jb2a.shield.02.loop.yellow")
		.attachTo(target)
		.scale(0.5)
		.persist()
		.name(`shield-of-faith-${target.id}`)
		.fadeIn(300)
		.fadeOut(300)
		.extraEndDuration(800)
		.opacity(0.7);
	await sequence.play();
}

if(args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `shield-of-faith-${target.id}`, object: target });

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.shield.02.outro_explode.yellow")
		.scale(0.5)
		.attachTo(target)
		.opacity(0.7);
	await sequence.play();
}
