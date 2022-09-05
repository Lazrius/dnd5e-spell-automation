({
	name: "Hunger Of Hadar",
	id: "t4qyllttaaa8v2f9",
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
	.file("jb2a.extras.tmfx.runes.circle.simple.evocation")
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
	.file("jb2a.sleet_storm.purple")
	.atLocation(template.position)
	.scaleToObject(9.5)
	.scaleIn(0, 7000, {ease: "easeOutCubic", delay: 100})
	.fadeIn(300)
	.persist()
	.scaleOut(0, 7000, {ease: "easeOutCubic", delay: 100})
	.fadeOut(4000)
	.name(`hunger-of-hadar-part-1${template.id}`)
	.opacity(0.8)
	.belowTokens();
sequence
	.effect()
	.file("jb2a.darkness.black")
	.atLocation(template.position)
	.scaleIn(0, 1000, {ease: "easeOutCubic", delay: 100})
	.fadeIn(300)
	.scaleOut(0, 4000, {ease: "easeOutCubic", delay: 100})
	.fadeOut(4000)
	.persist()
	.name(`hunger-of-hadar-part-2${template.id}`)
	.opacity(0.8)
	.scaleToObject(9);
await sequence.play();
