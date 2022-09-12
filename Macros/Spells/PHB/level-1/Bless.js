({
	name: "Bless",
	id: "coszx5yd58jrmiyh",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js
// @include getTargetsDae.js

for (const target of targets) {
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
			.filter("Glow", { color: 0xfefebe })
			.opacity(0.5);
		sequence
			.effect()
			.file("jb2a.extras.tmfx.outpulse.circle.01.slow")
			.atLocation(target)
			.fadeIn(500)
			.fadeOut(500)
			.filter("Glow", { color: 0xfefebe });
		sequence
			.effect()
			.file("jb2a.bless.200px.intro.yellow")
			.atLocation(target)
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
			.name(`bless-${target.id}`);
		await sequence.play();

	}
	
	if(args[0] === "off") {
		Sequencer.EffectManager.endEffects({ name: `bless-${casterToken.id}`, object: casterToken });
	}    

}

