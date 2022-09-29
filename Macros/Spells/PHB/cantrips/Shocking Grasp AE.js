({
	name: "Shocking Grasp AE",
	id: "yhom61t1g1qflygk",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if(args[0] === "on") {
	const sequence = new Sequence();
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
	Sequencer.EffectManager.endEffects({ name: `shocking-grasp-${target.id}`, object: target });
}
