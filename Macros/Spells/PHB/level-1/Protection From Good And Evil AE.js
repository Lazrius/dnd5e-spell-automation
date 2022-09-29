({
	name: "Protection From Good And Evil AE",
	id: "vzlgr2qt7vup3ays",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js
// @include getTargetDae.js


if(args[0] === "on") {
	const sequence = new Sequence();

	sequence
		.effect()
		.file("jb2a.magic_signs.circle.02.abjuration.intro.yellow")
		.attachTo(target)
		.scaleToObject(1.5)
		.waitUntilFinished(-500)
		.belowTokens();
	sequence
		.effect()
		.file("jb2a.magic_signs.circle.02.abjuration.loop.yellow")
		.attachTo(target)
		.scaleToObject(1.5)
		.persist()
		.name(`protection-from-good-and-evil-${target.id}`)
		.fadeIn(300)
		.fadeOut(300)
		.extraEndDuration(800)
		.belowTokens();
			
	await sequence.play();
}

else if(args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `protection-from-good-and-evil-${target.id}`, object: target });

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.magic_signs.circle.02.abjuration.outro.yellow")
		.scaleToObject(1.5)
		.attachTo(target)
		.belowTokens();
	await sequence.play();
}

