({
	name: "Searing Smite",
	id: "jdf1qr1rmejwyvhv",
	spellType: "range"
});
// @endmeta
// This needs to be placed in dae's macro.execute with the @token and @target parameters in order to work correctly.

const casterToken = canvas.scene.tokens.get(args[1]);
const targetActor = canvas.scene.tokens.get(args[2]);

if (args[0] === "on") {
	// If the dynamic active effect started

	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
		.atLocation(casterToken)
		.duration(2000)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.waitUntilFinished(-1200)
		.filter("Glow", { color: 0xffa500 })
		.opacity(0.8);
	sequence
		.effect()
		.file("jb2a.spear.melee.fire.orange")
		.atLocation(casterToken)
		.stretchTo(targetActor)
		.waitUntilFinished(-1200)
		.fadeIn(500)
		.fadeOut(1500);
	sequence
		.effect()
		.file("jb2a.explosion.02.orange")
		.atLocation(targetActor)
		.fadeIn(100)
		.fadeOut(100)
		.scale(0.5);
	sequence
		.effect()
		.file("jb2a.flaming_sphere.orange")
		.scaleToObject(2)
		.belowTokens()
		.attachTo(targetActor)
		.duration(2000)
		.fadeIn(500)
		.fadeOut(1000)
		.persist()
		.name(`searing-smite-${targetActor.id}`);
	await sequence.play();

}
if (args[0] === "off") {
	// If the dynamic active effect ended
	Sequencer.EffectManager.endEffects({ name: `searing-smite-${targetActor.id}`, object: targetActor.id });
}
