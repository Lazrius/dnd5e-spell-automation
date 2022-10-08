({
	name: "Color Spray",
	id: "asxhow0zbs02o9v9",
	spellType: "templates"
});
// @endmeta
// @include getTemplate.js
// @include helpers/assembleSettings.js

let colors = [
	'jb2a.breath_weapons.poison.cone.red',
	'jb2a.breath_weapons.poison.cone.purple',
	'jb2a.breath_weapons.poison.cone.blue',
	'jb2a.breath_weapons.poison.cone.green',
	'jb2a.breath_weapons.poison.cone.dark_red'
];

if (!moduleSettings.disableLoreUnfriendlyAnimations) {
	colors = [
		...colors,
		// Add our pride flags! 🏳️‍🌈🏳️
		'jb2a.breath_weapons.fire.cone.multicolored.01.1',
		'jb2a.breath_weapons.fire.cone.multicolored.02.1',
		'jb2a.breath_weapons.fire.cone.multicolored.01.0',
		'jb2a.breath_weapons.fire.cone.multicolored.02.0',
		'jb2a.breath_weapons.fire.cone.multicolored.01.2',
		'jb2a.breath_weapons.fire.cone.multicolored.02.2'
	];
}

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.illusion")
	.attachTo(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xffa500 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file(colors[Math.floor(Math.random() * colors.length)])
	.atLocation(position, { cacheLocation: true })
	.stretchTo(template, { cacheLocation: true });
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
