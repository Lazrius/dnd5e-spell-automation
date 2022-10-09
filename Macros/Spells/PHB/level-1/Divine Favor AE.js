({
	name: "Divine Favor AE",
	id: "sqoouncskjmdzzz4",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.outpulse.circle.01.slow")
		.attachTo(target)
		.fadeIn(500)
		.fadeOut(500)
		.filter("Glow", { color: 0xfefebe });
	sequence
		.effect()
		.file("jb2a.bless.200px.intro.yellow")
		.attachTo(target)
		.fadeIn(100)
		.belowTokens()
		.scaleToObject(2)
		.scaleIn(0, 500, {ease: "easeOutCubic"})
		.waitUntilFinished(-500);
	sequence
		.effect()
		.file("jb2a.bless.200px.loop.yellow")
		.fadeOut(500)
		.scaleToObject(2)
		.attachTo(target)
		.persist()
		.belowTokens()
		.name(`divine-favor-${target.id}`);
	await sequence.play();
}
	
else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({ name: `divine-favor-${target.id}`, object: target });
} 
