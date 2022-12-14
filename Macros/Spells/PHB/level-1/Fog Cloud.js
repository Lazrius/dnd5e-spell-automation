({
	name: "Fog Cloud",
	id: "mqkc2wz4wr1dcs8m",
	spellType: "templates"
});
// @endmeta

// @include getTemplate.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.light.outro.blue")
	.delay(200)
	.fadeIn(300)
	.fadeOut(1000)
	.scaleToObject(3)
	.atLocation(casterToken)
	.duration(3500)
	.opacity(0.5);
sequence
	.effect()
	.file("jb2a.markers.01.blueyellow")
	.delay(200)
	.fadeIn(300)
	.fadeOut(500)
	.scaleToObject(2)
	.atLocation(casterToken)
	.duration(3500)
	.belowTokens()
	.animateProperty("sprite", "rotation", { from: 0, to: 360, duration: 4000, ease: "easeInOutCubic"});
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.conjuration")
	.atLocation(casterToken)
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.4)
	.opacity(1)
	.waitUntilFinished(1000);
sequence
	.effect()
	.file("jb2a.fog_cloud.1.white")
	.atLocation(position)
	.fadeIn(4000)
	.fadeOut(4000)
	.persist()
	.name(`fog-cloud${template._id}`)
	.opacity(0.8)
	.scaleToObject(9);
await sequence.play();
