({
	name: "Protection From Good And Evil",
	id: "vzlgr2qt7vup3ays",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js
// @include getTargetDae.js


if(args[0] === "on") {
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
		.filter("Glow", { color: 0xf9e076 })
		.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
	sequence
		.effect()
		.file("jb2a.markers.light.intro.yellow")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200)
		.scaleToObject(2)
		.waitUntilFinished(-500);

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
	Sequencer.EffectManager.endEffects({ name: `protection-from-good-and-evil-${casterToken.id}`, object: casterToken });

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.magic_signs.circle.02.abjuration.outro.yellow")
		.scaleToObject(1.5)
		.attachTo(casterToken)
		.belowTokens();
	await sequence.play();
}

