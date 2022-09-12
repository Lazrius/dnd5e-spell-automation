({
	name: "Mage Armor",
	id: "0kujd3hwd2o957d3",
	spellType: "aefx"
});
// @endmeta

// @include getTokenDae.js
// @include getTargetsDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence.effect()
		.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
		.atLocation(casterToken)
		.duration(2000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.opacity(0.3)
		.filter("Glow", { color: 0xffffff })
		.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
	sequence
		.effect()
		.file("jb2a.moonbeam.01.intro.blue")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200)
		.waitUntilFinished(-500);
	sequence
		.effect()
		.file("jb2a.shield.02.intro.blue")
		.opacity(0.4)
		.scale(0.45)
		.atLocation(casterToken)
		.fadeIn(500)
		.fadeOut(500);
	for (const target of targets) {
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
}

if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `mage-armor-${casterToken.id}`, object: casterToken });
}

