({
	name: "Cause Fear",
	id: "jco4sq2pphivhjn5",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.necromancy")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-1000)
	.filter("Glow", { color: 0xd7e5f0 });
for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.impact.004.blue")
		.atLocation(target)
		.fadeIn(500)
		.randomRotation();
	sequence
		.effect()
		.file("jb2a.toll_the_dead.blue.shockwave")
		.atLocation(target)
		.fadeIn(500)
		.scale(0.8, 1)
		.randomRotation();
	sequence
		.effect()
		.file("jb2a.fireflies.many.02.blue")
		.atLocation(target)
		.fadeIn(500)
		.fadeOut(500)
		.scale(0.4, 0.5)
		.randomRotation();
	sequence
		.effect()
		.file("jb2a.toll_the_dead.blue.skull_smoke")
		.fadeIn(100)
		.fadeOut(100)
		.scale(0.4, 0.55)
		.atLocation(target)
		.scaleIn(0, 500, { ease: "easeOutCubic" });
}
await sequence.play();
