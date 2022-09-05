({
	name: "Shield Of Faith Persist",
	id: "d7fblb0c9reqcn04",
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
		.file("jb2a.shield.02.intro.yellow")
		.attachTo(tokenD)
		.scale(0.5)
		.waitUntilFinished(-500)
		.opacity(0.7);
	sequence
		.effect()
		.file("jb2a.shield.02.loop.yellow")
		.attachTo(tokenD)
		.scale(0.5)
		.persist()
		.name(`shield-of-faith-${tokenD.id}`)
		.fadeIn(300)
		.fadeOut(300)
		.extraEndDuration(800)
		.opacity(0.7);
	await sequence.play();
}

if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `shield-of-faith-${tokenD.id}`, object: tokenD });

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.shield.02.outro_explode.yellow")
		.scale(0.5)
		.attachTo(tokenD)
		.opacity(0.7);
	await sequence.play();
}
