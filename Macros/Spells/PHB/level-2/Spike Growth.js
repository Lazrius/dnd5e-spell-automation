({
	name: "Spike Growth",
	id: "v093uueggmentix6",
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
	.file("jb2a.markers.drop.dark_green.01")
	.fadeIn(300)
	.fadeOut(1000)
	.scaleToObject(3)
	.atLocation(args[0].tokenId)
	.duration(2900)
	.opacity(0.5)
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
	.file("jb2a.extras.tmfx.runes.circle.simple.transmutation")
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
	.file("jb2a.template_circle.symbol.normal.drop.dark_green")
	.atLocation(template.position)
	.fadeIn(1500)
	.persist()
	.fadeOut(1500)
	.name(`spike-growth-${template.id}`)
	.belowTokens();
await sequence.play();
