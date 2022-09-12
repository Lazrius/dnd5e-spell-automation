({
	name: "Sanctuary",
	id: "600nic69qyn59tsx",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js
// @include getTargetsDae.js


if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
		.atLocation(casterToken)
		.duration(2000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.opacity(0.3)
		.filter("Glow", { color: 0xa9e9f5 })
		.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
	sequence
		.effect()
		.file("jb2a.moonbeam.01.intro.blue")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200)
		.waitUntilFinished(-500);
	for (const target of targets) {
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
}

if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `sanctuary-${casterToken.id}`, object: casterToken });
}

