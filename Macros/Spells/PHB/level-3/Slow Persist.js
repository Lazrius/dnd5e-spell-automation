({
	name: "Slow Persist",
	id: "nwh4r08xvuvv30b9",
	spellType: "aefx"
});
// @endmeta
// @include getCasterToken.js

let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
	// If the dynamic active effect started

	const sequence = new Sequence(); 
	sequence
		.effect()
		.file("jb2a.impact.004.dark_purple")
		.atLocation(targetID)
		.fadeIn(500)
		.delay(2000);
	sequence
		.effect()
		.delay(2000)
		.file("jb2a.energy_strands.overlay.purple.01")
		.fadeIn(100)
		.fadeOut(500)
		.scale(0.4, 0.45)
		.attachTo(targetID)
		.randomRotation()
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.persist()
		.name(`slow-${targetID.id}`);
	await sequence.play();

}
if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `slow-${targetID.id}`, object: targetID });
}    
