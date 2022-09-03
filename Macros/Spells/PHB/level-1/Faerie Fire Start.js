// @import getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-2000)
	.filter("Glow", { color: 0x7D87BF }); 
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);
