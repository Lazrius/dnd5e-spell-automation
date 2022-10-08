({
	name: "Sword Burst",
	id: "7qg9bqecm9e1sm43",
	spellType: "templates"
});
// @endmeta

// @include getTemplate.js
// @include helpers/removeCasterFromTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.attachTo(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x5e899e })
	.opacity(0.8)
	.waitUntilFinished(-1000);

const rotatePos = {
	x: [],
	y: []
};

for (let i = 0; i < 6; i++) {
	sequence
		.effect()
		.file('jb2a.sword.melee.fire.blue')
		.atLocation(position)
		.rotate(i * 60)
		.scaleToObject(2.75)
		.fadeIn(300)
		.fadeOut(300);
}

await sequence.play();
canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
