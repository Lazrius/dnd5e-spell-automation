({
	name: "Blade Ward Persist",
	id: "247d7ktfu3edwl2p",
	spellType: "aefx"
});
// @endmeta
//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let tokenD = canvas.tokens.get(args[1].tokenId);
if (args[0] === "on") {
	// If the dynamic active effect started
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.token_stage.round.blue.01.01")
		.attachTo(tokenD)
		.scaleToObject(1.5)
		.persist()
		.name(`blade-ward-${tokenD.id}`)
		.fadeIn(1000)
		.fadeOut(500)
		.opacity(0.8)
		.playbackRate(0.1);
	await sequence.play();
}

if (args[0] === "off") {
	// If the dynamic active effect ended
	await Sequencer.EffectManager.endEffects({name: `blade-ward-${tokenD.id}`, object: tokenD});
}
