//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

// @import getCasterToken.js

let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
	// If the dynamic active effect started

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
	sequence
		.effect()
		.file("jb2a.hunters_mark.loop.02.blue")
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.fadeOut(500)
		.scaleToObject(1)
		.attachTo(targetID)
		.persist()
		.opacity(0.5)
		.name(`hunters-mark-${targetID.id}`);
	await sequence.play();

}
if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `hunters-mark-${targetID.id}`, object: targetID });
}    
