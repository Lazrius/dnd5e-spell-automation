({
	name: "Frostbite AE",
	id: "ivjdjdw96826pz3v",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.token_border.circle.static.blue.001")
		.delay(2000)
		.attachTo(target)
		.scale(0.5)
		.fadeIn(2000)
		.fadeOut(2000)
		.persist()
		.name(`frostbite-${target.id}`);
	await sequence.play();
}

if(args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `frostbite-${target.id}`, object: target });
}
