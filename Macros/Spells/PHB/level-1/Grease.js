({
	name: "Grease",
	id: "jlwigaqsmwpq223w",
	spellType: "templates"
});
// @endmeta

// @include getTemplate.js
// @include helpers/getRayEndPos.js

const liquids = [
	'jb2a.grease.dark_brown.loop',
	'jb2a.grease.dark_green.loop',
	'jb2a.grease.dark_gray.loop',
	'jb2a.grease.dark_red.loop',
	'jb2a.grease.dark_purple.loop',
];

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
	.file(liquids[Math.floor(Math.random() * liquids.length)])
	.atLocation(templateMiddleGround)
	.scaleIn(0.5, 1000)
	.fadeIn(300)
	.fadeOut(1000)
	.persist()
	.name(`grease-${template._id}`)
	.opacity(0.8)
	.scaleToObject(2);
await sequence.play();
