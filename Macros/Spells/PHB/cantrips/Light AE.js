({
	name: "Light AE",
	id: "2htthnmlic97j0lk",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

if (args[0] === "on") {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.impact.yellow.5")
		.attachTo(target)
		.fadeIn(100)
		.fadeOut(200);

	await sequence.play();
	target.data.update({ light:{ bright : 20, dim: 40, color : '#ffffff', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});
}

else if (args[0] === "off") {
	target.data.update({ light:{ bright : 0, dim: 0, color : '#000000', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}});
}