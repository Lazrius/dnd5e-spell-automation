({
	name: "Faerie Fire AE",
	id: "sg9kmig2cgjc2gqu",
	spellType: "aefx"
});
// @endmeta

// @include getTargetDae.js
// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence(); 
	sequence
		.effect()
		.file("jb2a.impact.007.blue")
		.attachTo(target)
		.fadeIn(500)
		.delay(2000);
		
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
			
	target.document.update({ light: { bright : 0, dim: 10, color : '#a5d5f3', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});

	await sequence.play();
}

else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `faerie-fire-${target.id}`, object: target });
	target.document.update({ light:{ bright : 0, dim: 0, color : '#000000', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});
}