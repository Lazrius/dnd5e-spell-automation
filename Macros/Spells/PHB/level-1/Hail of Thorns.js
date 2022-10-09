({
	name: "Entangle",
	id: "xn1cyobxgddoyw3x",
	spellType: "templates"
});
// @endmeta

// @include getTemplate.js
// @include helpers/getRayEndPos.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.markers.02.greenorange")
	.delay(200)
	.fadeIn(300)
	.fadeOut(1000)
	.scaleToObject(3)
	.atLocation(casterToken)
	.duration(1500)
	.opacity(0.5);
sequence
	.effect()
	.file("jb2a.markers.01.greenorange")
	.delay(200)
	.fadeIn(300)
	.fadeOut(500)
	.scaleToObject(2)
	.atLocation(casterToken)
	.duration(1500)
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
	.waitUntilFinished(-300)
	.filter("Glow", { color: 0x00ff00});
sequence
	.effect()
	.file('jb2a.guiding_bolt.02.greenorange')
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(300)
	.atLocation(casterToken)
	.stretchTo(templateMiddleGround);
sequence
	.effect()
	.file("jb2a.entangle.green02")
	.atLocation(position, {cacheLocation: true})
	.fadeIn(1500)
	.fadeOut(1500)
	.offset({ x: -200, y: -200 })
	.name(`entangle-${template.id}`)
	.belowTokens();
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
