({
	name: "Arms of Hadar",
	id: "n3fxo2g2199go43m",
	spellType: "templates"
});
// @endmeta

// @include getTemplate.js
// @include helpers/removeCasterFromTargets.js

const sequence = new Sequence();

sequence.effect()
	.file('jb2a.extras.tmfx.runes.circle.outpulse.conjuration')
	.attachTo(casterToken)
	.tint('#7851a9')
	.fadeOut(300)
	.scale(0.4)
	.waitUntilFinished(-500);

let lastEffect;
for (const target of targets) {
	lastEffect = sequence.effect()
		// Make the effect name end in either 02 or 03 so the effects are 'random'.
		.file('jb2a.energy_beam.normal.dark_purplered.0' + Math.floor(Math.random() * (3 - 2 + 1) + 2))
		.atLocation(template)
		.stretchTo(target)
		.fadeIn(200)
		.fadeOut(300)
		.scale(0.5);
}

if (lastEffect) {
	lastEffect.waitUntilFinished();
}

sequence.effect()
	.file('jb2a.arms_of_hadar.dark_purple')
	.atLocation(template)
	.fadeIn(250)
	.fadeOut(400)
	.scaleOut(1.5, 500)
	.belowTokens();

await sequence.play();
await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);