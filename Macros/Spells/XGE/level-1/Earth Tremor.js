({
	name: "Earth Tremor",
	id: "31xbp9n3shtjl5yd",
	spellType: "range"
});
// @endmeta
//For use with a 10ft spherical template. Will be off-center if cube is used.
const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(args[0].tokenId)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xFFA500 })
	.opacity(0.8)
	.waitUntilFinished(-1000);
sequence
	.effect()
	.file("jb2a.impact.010.orange")
	.atLocation(template.position)
	.fadeOut(500)
	.fadeIn(100)
	.scale(1)
	.belowTokens();
sequence
	.effect()
	.file("jb2a.impact.ground_crack.orange.01")
	.atLocation(template.position)
	.belowTokens()
	.fadeOut(1000)
	.fadeIn(100)
	.scale(1)
	.belowTokens()
	.waitUntilFinished(-2000);
sequence
	.effect()
	.file("jb2a.impact.ground_crack.still_frame.01")
	.atLocation(template.position)
	.belowTokens()
	.fadeOut(1000)
	.fadeIn(1000)
	.scale(1)
	.belowTokens()
	.persist()
	.opacity(0.8)
	.name(`earth-tremor-diff-terrain-marker`);
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
