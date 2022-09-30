({
	name: "Hex AE",
	id: "esvco2y5dw4tv3g5",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();

	sequence
		.effect()
		.file("jb2a.impact.dark_red.2")
		.attachTo(target)
		.fadeIn(500)
		.delay(2000);
	sequence
		.effect()
		.file("jb2a.smoke.puff.centered.dark_black.1")
		.attachTo(target)
		.fadeIn(500)
		.delay(2300);
	sequence
		.effect()
		.delay(2000)
		.file("jb2a.token_stage.round.red.01.04")
		.fadeIn(100)
		.fadeOut(500)
		.scale(0.4, 0.45)
		.attachTo(target)
		.randomRotation()
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.persist()
		.name(`hex-${target.id}`);
	
	await sequence.play();
}

else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `hex-${target.id}`, object: target });
}    
