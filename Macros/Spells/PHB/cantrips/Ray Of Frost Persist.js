({
	name: "Ray Of Frost Persist",
	id: "1068svcch6cf0mjv",
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
		.file("jb2a.token_border.circle.static.blue.001")
		.delay(2000)
		.attachTo(tokenD)
		.scale(0.5)
		.fadeIn(2000)
		.fadeOut(2000)
		.persist()
		.name(`frost-${tokenD.id}`);
	await sequence.play();
}

if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `frost-${tokenD.id}`, object: tokenD });
}
