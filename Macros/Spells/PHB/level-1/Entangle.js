({
	name: "Entangle",
	id: "rbiljnyf4lj5y7mh",
	spellType: "range"
});
// @endmeta
const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.02.greenorange")
	.delay(200)
	.fadeIn(300)
	.fadeOut(1000)
	.scaleToObject(3)
	.atLocation(args[0].tokenId)
	.duration(1500)
	.opacity(0.5);
sequence
	.effect()
	.file("jb2a.markers.01.greenorange")
	.delay(200)
	.fadeIn(300)
	.fadeOut(500)
	.scaleToObject(2)
	.atLocation(args[0].tokenId)
	.duration(1500)
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
	.waitUntilFinished(-300)
	.filter("Glow", { color: 0x00ff00});    
sequence
	.effect()
	.file("jb2a.entangle.green")
	.atLocation(template.position, {cacheLocation: true})
	.fadeIn(1500)
	.persist()
	.fadeOut(1500)
	.offset({ x: -200, y: -200 })
	.name(`entangle-${template.id}`)
	.belowTokens();
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);
