({
	name: "Beast Sense",
	id: "9gewllswvuhcj66r",
	spellType: "range"
});
// @endmeta
// This needs to be placed in dae's macro.execute with the @token and @target parameters in order to work correctly.


const casterToken = canvas.scene.tokens.get(args[1]);
const targetActor = canvas.scene.tokens.get(args[2]);

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
		.file("jb2a.extras.tmfx.runes.circle.outpulse.divination")
		.atLocation(casterToken)
		.duration(4000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.waitUntilFinished(-1000)
		.filter("Glow", { color: 0x014421 });
	sequence
		.effect()
		.file("jb2a.shatter.green")
		.delay(200)
		.fadeIn(100)
		.fadeOut(500)
		.duration(1200)
		.scale(0.4)
		.opacity(0.4)
		.atLocation(casterToken);
	sequence
		.effect()
		.file("jb2a.hunters_mark.loop.01.green")
		.attachTo(casterToken)
		.fadeIn(2000)
		.fadeOut(1000)
		.scale(0.5)
		.opacity(0.5)
		.persist()
		.name(`beast-sense-caster-${casterToken.id}`);
	sequence
		.effect()
		.file("jb2a.hunters_mark.loop.01.green")
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.fadeIn(1000)
		.fadeOut(1000)
		.scale(0.5)
		.attachTo(targetActor)
		.persist()
		.opacity(0.5)
		.name(`beast-sense-target-${targetActor.id}`);
	await sequence.play();

}
if(args[0] === "off"){
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `beast-sense-caster-${casterToken.id}`, object: casterToken.id });
	Sequencer.EffectManager.endEffects({ name: `beast-sense-target-${targetActor.id}`, object: targetActor.id });

}    
