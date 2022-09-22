({
	name: "Shocking Grasp",
	id: "oqi7iktmi3rvzbcd",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js
// @include getTargetDae.js

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
		.atLocation(casterToken)
		.duration(2000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.filter("Glow", { color: 0x5e899e })
		.opacity(0.8)
		.waitUntilFinished(-1000);
	sequence
		.effect()
		.file("jb2a.static_electricity.02.blue")
		.atLocation(casterToken)
		.belowTokens()
		.fadeOut(500)
		.duration(1800)
		.fadeIn(500)
		.scale(0.7);

	sequence
		.effect()
		.file("jb2a.impact.011.blue")
		.atLocation(target)
		.scaleToObject(2);
	sequence
		.effect()
		.file("jb2a.static_electricity.02.blue")
		.delay(2000)
		.attachTo(target)
		.scaleToObject(1.2)
		.fadeIn(500)
		.fadeOut(2000)
		.persist()
		.name(`shocking-grasp-${target.id}`);
			
	await sequence.play();
}
	
else if (args[0] === "off"){
	Sequencer.EffectManager.endEffects({ name: `shocking-grasp-${casterToken.id}`, object: casterToken });
}
