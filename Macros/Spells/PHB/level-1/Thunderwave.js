({
	name: "Thunderwave",
	id: "elq0qzuad557kd4x",
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
sequence
	.effect()
	.file("jb2a.static_electricity.02.blue")
	.attachTo(casterToken)
	.belowTokens()
	.fadeOut(500)
	.duration(1800)
	.fadeIn(500)
	.scale(0.7);
sequence
	.effect()
	.file("jb2a.call_lightning.low_res.blueorange")
	.atLocation(position)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.opacity(0.5)
	.scale(0.3)
	.offset({ x: -150, y: -150 });
sequence
	.effect()
	.file("jb2a.thunderwave.center.blue")
	.atLocation(position)
	.offset({ x: -150, y: -150 });
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);

