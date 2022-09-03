const template = canvas.templates.placeables[canvas.templates.placeables.length - 1];
//uncomment the below line to remove the placed template after casting
//await template.delete();

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.light.outro.blue")
	.delay(200)
	.fadeIn(300)
	.fadeOut(1000)
	.scaleToObject(3)
	.atLocation(args[0].tokenId)
	.duration(3500)
	.opacity(0.5);

sequence
	.effect()
	.file("jb2a.markers.01.blueyellow")
	.delay(200)
	.fadeIn(300)
	.fadeOut(500)
	.scaleToObject(2)
	.atLocation(args[0].tokenId)
	.duration(3500)
	.belowTokens()
	.duration(3500);

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.illusion")
	.atLocation(args[0].tokenId)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.4)
	.opacity(1)
	.waitUntilFinished(1000)
	.filter("Glow", { color: 0xcc99ff });

sequence
	.effect()
	.file("jb2a.extras.tmfx.border.circle.simple.01")
	.atLocation(template.position)
	.scaleIn(0, 1000, { ease: "easeOutCubic", delay: 100 })
	.fadeIn(500)
	.fadeOut(500)
	.persist()
	.name(`silence${template.id}`)
	.opacity(0.8)
	.scaleToObject(9)
	.loopProperty("sprite", "rotation", { from: 0, to: 360, duration: 80000 });

await sequence.play();
