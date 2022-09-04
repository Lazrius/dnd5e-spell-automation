// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xffa500 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.impact.yellow.5")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200);
sequence
	.effect()
	.file("jb2a.burning_hands.02.orange")
	.atLocation(template.position, { cacheLocation: true })
	.stretchTo(template, { cacheLocation: true });
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);
