({
	name: "Shield Of Faith",
	id: "d7fblb0c9reqcn04",
	spellType: "aefx"
});
// @endmeta

// @include getTokenDae.js

if(args[0] === "on") {
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
		.file("jb2a.moonbeam.01.intro.rainbow")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200)
		.waitUntilFinished(-500);
	sequence
		.effect()
		.file("jb2a.shield.02.intro.yellow")
		.attachTo(casterToken)
		.scale(0.5)
		.waitUntilFinished(-500)
		.opacity(0.7);
	sequence
		.effect()
		.file("jb2a.shield.02.loop.yellow")
		.attachTo(casterToken)
		.scale(0.5)
		.persist()
		.name(`shield-of-faith-${casterToken.id}`)
		.fadeIn(300)
		.fadeOut(300)
		.extraEndDuration(800)
		.opacity(0.7);
	await sequence.play();
}

if(args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `shield-of-faith-${casterToken.id}`, object: casterToken });

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.shield.02.outro_explode.yellow")
		.scale(0.5)
		.attachTo(casterToken)
		.opacity(0.7);
	await sequence.play();
}
