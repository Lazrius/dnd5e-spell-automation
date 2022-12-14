({
	name: "Sleet Storm",
	id: "rnkdnonfsvkq7lab",
	spellType: "range"
});
// @endmeta
const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.02.dark_bluewhite")
	.delay(200)
	.fadeIn(300)
	.fadeOut(1000)
	.scaleToObject(3)
	.atLocation(args[0].tokenId)
	.duration(3500)
	.opacity(0.5);
sequence
	.effect()
	.file("jb2a.markers.01.dark_bluewhite")
	.delay(200)
	.fadeIn(300)
	.fadeOut(500)
	.scaleToObject(2)
	.atLocation(args[0].tokenId)
	.duration(3500)
	.belowTokens()
	.animateProperty("sprite", "rotation", { from: 0, to: 360, duration: 4000, ease: "easeInOutCubic"});
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.conjuration")
	.atLocation(args[0].tokenId)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.4)
	.opacity(1)
	.waitUntilFinished(1000)
	.filter("Glow", { color: 0x00008b});    
sequence
	.effect()
	.file("jb2a.sleet_storm.blue")
	.atLocation(template.position)
	.scaleToObject(15)
	.fadeIn(1000)
	.persist()
	.fadeOut(4000)
	.name(`sleet-storm${template.id}`)
	.opacity(0.7)
	.belowTokens();
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
