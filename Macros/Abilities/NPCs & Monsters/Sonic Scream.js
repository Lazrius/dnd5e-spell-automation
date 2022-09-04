// @include getCasterToken.js
// @include getTargets.js

for (const target of targets) {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.side_impact.part.shockwave.blue")
		.atLocation(casterToken)
		.reachTowards(target)
		.randomOffset()
		.repeats(5, 90, 120);
	await sequence.play();
}

await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);
