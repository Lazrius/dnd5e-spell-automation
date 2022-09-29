({
	name: "Hunters Mark AE",
	id: "rgqlnrxzsxmuuqm1",
	spellType: "aefx"
});
// @endmeta

// @include getTargetDae.js
// @include getTargetDae.js


if (args[0] === "on") {
	const sequence = new Sequence();
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
	
	await sequence.play();
}

else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `hunters-mark-${casterToken.id}`, object: casterToken });
}  