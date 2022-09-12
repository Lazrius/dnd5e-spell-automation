({
	name: "Faerie Fire Persist",
	id: "sg9kmig2cgjc2gqu",
	spellType: "aefx"
});
// @endmeta

// @include getTokenDae.js
// @include getTargetsDae.js

if(args[0] === "on") {
	const sequence = new Sequence(); 
	sequence
		.effect()
		.file("jb2a.impact.007.blue")
		.atLocation(target)
		.fadeIn(500)
		.delay(2000);
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
		.atLocation(casterToken)
		.duration(4000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.waitUntilFinished(-2000)
		.filter("Glow", { color: 0x7D87BF });
	for (const target of targets) {
		sequence
			.effect()
			.delay(2000)
			.file("jb2a.markers.light.loop.blue")
			.fadeIn(100)
			.fadeOut(500)
			.scale(0.4, 0.45)
			.attachTo(target)
			.randomRotation()
			.scaleIn(0, 500, {ease: "easeOutCubic"})
			.persist()
			.name(`faerie-fire-${targetID.id}`);
			
		target.document.update({ light:{ bright : 0, dim: 10, color : '#a5d5f3', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});
	}
	await sequence.play();
}
if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `faerie-fire-${casterToken.id}`, object: casterToken });
	casterToken.document.update({ light:{ bright : 0, dim: 0, color : '#000000', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});
}