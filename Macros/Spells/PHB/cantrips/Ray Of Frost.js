({
	name: "Ray Of Frost",
	id: "1068svcch6cf0mjv",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js
// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
		.atLocation(casterToken)
		.duration(2000)
		.fadeIn(500)
		.fadeOut(500)
		.scaleToObject(2)
		.filter("Glow", { color: 0x26abff });

	sequence
		.effect()
		.file("jb2a.energy_strands.complete.blue.01")
		.atLocation(casterToken)
		.fadeIn(500)
		.duration(2200)
		.fadeOut(500)
		.scaleToObject(2)
		.waitUntilFinished(-500);
		
	sequence
		.effect()
		.file("jb2a.ray_of_frost.blue")
		.atLocation(casterToken)
		.stretchTo(target);
	sequence
		.effect()
		.file("jb2a.token_border.circle.static.blue.001")
		.delay(2000)
		.attachTo(target)
		.scale(0.5)
		.fadeIn(2000)
		.fadeOut(2000)
		.persist()
		.name(`frost-${target.id}`);
	
	await sequence.play();
}

else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `frost-${casterToken.id}`, object: casterToken });
}
