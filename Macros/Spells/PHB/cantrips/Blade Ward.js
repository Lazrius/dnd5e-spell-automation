({
	name: "Blade Ward",
	id: "247d7ktfu3edwl2p",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.outpulse.abjuration")
		.atLocation(casterToken)
		.duration(1700)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.filter("Glow", { color: 0xD7E5F0 })
		.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });

	sequence
		.effect()
		.file("jb2a.shimmer.01.blue")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(500)
		.duration(1900)
		.scaleToObject(1.5);
	sequence
		.effect()
		.file("jb2a.impact.010.blue")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200);
	sequence
		.effect()
		.file("jb2a.token_stage.round.blue.01.01")
		.attachTo(casterToken)
		.scaleToObject(1.5)
		.persist()
		.name(`blade-ward-${casterToken.id}`)
		.fadeIn(1000)
		.fadeOut(500)
		.opacity(0.8)
		.playbackRate(0.1);
	await sequence.play();
}

if (args[0] === "off") {
	await Sequencer.EffectManager.endEffects({name: `blade-ward-${casterToken.id}`, object: casterToken});
}
