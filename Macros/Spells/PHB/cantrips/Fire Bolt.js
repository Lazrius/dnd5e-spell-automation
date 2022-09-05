({
	name: "Fire Bolt",
	id: "vq4ruar4i6qb07oy",
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
	.opacity(0.8)
	.filter("Glow", { color: 0xffa500 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.smoke.puff.centered.dark_black")
	.atLocation(casterToken)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.randomRotation();
for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.fire_bolt.orange")
		.atLocation(casterToken)
		.stretchTo(target);
	sequence
		.effect()
		.file("jb2a.impact.009.orange")
		.atLocation(target)
		.fadeIn(500)
		.fadeOut(500)
		.delay(1000)
		.scaleToObject();
}
await sequence.play();
