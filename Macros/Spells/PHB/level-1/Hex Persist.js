({
	name: "Hex Persist",
	id: "esvco2y5dw4tv3g5",
	spellType: "aefx"
});
// @endmeta
//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
	// If the dynamic active effect started
	const sequence = new Sequence(); 
	sequence
		.effect()
		.file("jb2a.impact.dark_red.2")
		.atLocation(targetID)
		.fadeIn(500)
		.delay(2000);
	sequence
		.effect()
		.file("jb2a.smoke.puff.centered.dark_black.1")
		.atLocation(targetID)
		.fadeIn(500)
		.delay(2300);
	sequence
		.effect()
		.delay(2000)
		.file("jb2a.token_stage.round.red.01.04")
		.fadeIn(100)
		.fadeOut(500)
		.scale(0.4, 0.45)
		.attachTo(targetID)
		.randomRotation()
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.persist()
		.name(`hex-${targetID.id}`);
	await sequence.play();

}
if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `hex-${targetID.id}`, object: targetID });

}    
