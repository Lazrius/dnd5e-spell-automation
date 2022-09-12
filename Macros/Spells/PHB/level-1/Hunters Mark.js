({
	name: "Hunters Mark",
	id: "okpi5lrz12burasz",
	spellType: "aefx"
});
// @endmeta

// @include getTokenDae.js
// @include getTargetsDae.js


if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.markers.light.intro.green")
		.atLocation(casterToken)
		.fadeIn(500)
		.fadeOut(500);
	sequence
		.effect()
		.file("jb2a.hunters_mark.pulse.02.blue")
		.atLocation(casterToken)
		.duration(4000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.waitUntilFinished(-2000)
		.filter("Glow", { color: 0xfefebe })
		.opacity(0.5);
	for (const target of targets) {
		sequence
			.effect()
			.file("jb2a.hunters_mark.loop.02.blue")
			.scaleIn(0, 500, { ease: "easeOutCubic" })
			.fadeOut(500)
			.scaleToObject(1)
			.attachTo(target)
			.persist()
			.opacity(0.5)
			.name(`hunters-mark-${target.id}`);
	}
	await sequence.play();
}

if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `hunters-mark-${casterToken.id}`, object: casterToken });
}  