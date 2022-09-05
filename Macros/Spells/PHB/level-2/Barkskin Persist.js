({
	name: "Barkskin Persist",
	id: "en7m2p701ggmz7n1",
	spellType: "aefx"
});
// @endmeta
//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
	// If the dynamic active effect started
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.shield.01.intro.green")
		.attachTo(tokenD)
		.scale(0.5)
		.waitUntilFinished(-500)
		.opacity(0.3);
	sequence
		.effect()
		.file("jb2a.fireflies.few.02.green")
		.attachTo(tokenD)
		.scale(0.5)
		.persist()
		.name(`barkskin-1-${tokenD.id}`)
		.fadeIn(2000)
		.fadeOut(2000);
	sequence
		.effect()
		.file("jb2a.shield.01.loop.green")
		.attachTo(tokenD)
		.scale(0.5)
		.persist()
		.name(`barkskin-2-${tokenD.id}`)
		.fadeIn(300)
		.fadeOut(300)
		.extraEndDuration(800)
		.opacity(0.3);
	await sequence.play();
}

if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `barkskin-1-${tokenD.id}`, object: tokenD });
	Sequencer.EffectManager.endEffects({ name: `barkskin-2-${tokenD.id}`, object: tokenD });

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.shield.01.outro_explode.green")
		.scale(0.5)
		.opacity(0.3)
		.attachTo(tokenD);
	await sequence.play();
}

