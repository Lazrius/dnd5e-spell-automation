({
	name: "Bane",
	id: "v15vkquib1dr8ndx",
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
		.filter("Glow", { color: 0xf02d2b });
	sequence
		.effect()
		.file("jb2a.impact.004.dark_red")
		.atLocation(target)
		.fadeIn(500)
		.delay(2000);
	sequence
		.effect()
		.delay(2000)
		.file("jb2a.energy_strands.overlay.dark_red.01")
		.fadeIn(100)
		.fadeOut(500)
		.scale(0.4, 0.45)
		.attachTo(target)
		.randomRotation()
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.persist()
		.name(`bane-${target.id}`);

	await sequence.play();
}

else if(args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `bane-${target.id}`, object: tar });
} 