({
	name: "Hex",
	id: "esvco2y5dw4tv3g5",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js
// @include getTargetDae.js


if(args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
		.atLocation(casterToken)
		.duration(4000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.waitUntilFinished(-2000)
		.filter("Glow", { color: 0xcd5c5c });
		
	sequence
		.effect()
		.file("jb2a.impact.dark_red.2")
		.atLocation(target)
		.fadeIn(500)
		.delay(2000);
	sequence
		.effect()
		.file("jb2a.smoke.puff.centered.dark_black.1")
		.atLocation(target)
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
	Sequencer.EffectManager.endEffects({ name: `hex-${casterToken.id}`, object: casterToken });
}    
