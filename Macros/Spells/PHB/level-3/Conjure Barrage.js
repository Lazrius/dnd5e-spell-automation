({
	name: "Conjure Barrage",
	id: "nmb7bn2qusfu4tvf",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.conjuration")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", { color: 0xcc8899 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.blue")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200)
	.waitUntilFinished(-500);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.dagger.throw.01.white")
		.atLocation(casterToken)
		.stretchTo(target)
		.randomOffset()
		.repeats(5, 30, 60);

}

await sequence.play();
await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
