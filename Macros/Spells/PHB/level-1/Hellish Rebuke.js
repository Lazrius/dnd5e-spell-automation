({
	name: "Hellish Rebuke",
	id: "qwty7zahgkp6f1os",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-1500)
	.filter("Glow", { color: 0xffad33 });
sequence
	.effect()
	.file("jb2a.impact.004.orange")
	.atLocation(casterToken)
	.fadeIn(100);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.flames.orange.01")
		.fadeIn(100)
		.duration(4000)
		.fadeOut(1000)
		.scaleToObject(3)
		.atLocation(target)
		.scaleIn(0, 500, { ease: "easeOutCubic" })
		.scaleOut(0, 4000, { ease: "easeOutCubic" });
	sequence
		.effect()
		.file("jb2a.impact.011.orange")
		.atLocation(target)
		.scaleIn(0, 300, { ease: "easeOutCubic" })
		.scaleToObject(2);
	sequence
		.effect()
		.file("jb2a.smoke.puff.centered.dark_black.0")
		.atLocation(target)
		.scaleIn(0, 300, { ease: "easeOutCubic" })
		.scaleToObject(3)
		.randomRotation();
}
await sequence.play();

