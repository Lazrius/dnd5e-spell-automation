({
	name: "Pass Without Trace",
	id: "erfzkt4tm4ju9z8i",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0x5b0a91 })
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.markers.light.intro.blue")
	.duration(1500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.7);

sequence
	.effect()
	.file("jb2a.extras.tmfx.border.circle.outpulse.01.normal")
	.attachTo(casterToken)
	.fadeIn(500)
	.filter("Glow", { color: 0x431c53 })
	.fadeOut(500)
	.scale(2.5)
	.opacity(0.3)
	.belowTokens()
	.persist();

await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);
