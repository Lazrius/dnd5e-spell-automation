({
	name: "Word Of Radiance",
	id: "nzgf0hay2smyeo6p",
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
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-1200)
	.filter("Glow", { color: 0xffffbf })
	.opacity(0.8);
sequence
	.effect()
	.file("jb2a.markers.light.intro.yellow")
	.attachTo(casterToken)
	.belowTokens()
	.fadeOut(500)
	.duration(1200)
	.fadeIn(500)
	.scale(0.7);
sequence
	.effect()
	.file("jb2a.explosion.03.blueyellow")
	.atLocation({ x: template.x, y: template.y});
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
