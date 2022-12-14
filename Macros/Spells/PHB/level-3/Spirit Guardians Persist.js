({
	name: "Spirit Guardians Persist",
	id: "8qurmqmdrlxp1ec5",
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
		.delay(2000)
		.file("jb2a.fireflies.many.02.red")
		.fadeIn(100)
		.fadeOut(500)
		.scale(0.4, 0.45)
		.attachTo(targetID)
		.randomRotation()
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.persist()
		.name(`spirit-guardians-${targetID.id}`);
	await sequence.play();

}
if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `spirit-guardians-${targetID.id}`, object: targetID });
}    
