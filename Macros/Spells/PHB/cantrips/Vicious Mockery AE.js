({
	name: "Vicious Mockery AE",
	id: "isgxqlsa01bdtpon",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.token_border.circle.spinning.purple.009")
		.delay(2000)
		.attachTo(target)
		.scale(0.5)
		.fadeIn(2000)
		.fadeOut(2000)
		.persist()
		.name(`mockery-${target.id}`);
	await sequence.play();
}

if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `mockery-${casterToken.id}`, object: casterToken });
}
