({
	name: "Chaos Bolt",
	id: "afy2bs8dv4fyx6zf",
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
	.opacity(0.5)
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.moonbeam.01.intro.rainbow")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200)
	.waitUntilFinished(-500);
for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.flaming_sphere.rainbow")
		.atLocation(casterToken)
		.moveTowards(target, { ease: "easeInCubic" })
		.moveSpeed(500)
		.fadeIn(500)
		.duration(1200)
		.fadeOut(500)
		.scale(0.6)
		.waitUntilFinished(-500)
		.rotateIn(360, 1200);
	sequence
		.effect()
		.file("jb2a.impact.004.dark_purple")
		.attachTo(target);
}
await sequence.play();
