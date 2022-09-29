({
	name: "Ray Of Frost AE",
	id: "zaqti8gyej1198ky",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js
// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();
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
