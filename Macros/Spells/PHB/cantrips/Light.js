({
	name: "Light",
	id: "nhbr0zzon1mr0eds",
	spellType: "aefx"
});
// @endmeta
// @include getTokenDae.js
// @include getTargetDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
		.atLocation(casterToken)
		.duration(1700)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.5)
		.filter("Glow", { color: 0xffa500 })
		.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
	sequence
		.effect()
		.file("jb2a.moonbeam.01.intro.rainbow")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200);
	sequence
		.effect()
		.file("jb2a.impact.yellow.5")
		.atLocation(casterToken)
		.fadeIn(100)
		.fadeOut(200);

	sequence.play();
	target.document.update({ light:{ bright : 20, dim: 40, color : '#ffffff', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});
}

else if (args[0] === "off") {
	target.document.update({ light:{ bright : 0, dim: 0, color : '#000000', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});
}    