// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", { color: 0x89F423 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.template_circle.symbol.out_flow.drop.dark_green")
	.atLocation(casterToken)
	.fadeIn(500)
	.duration(2000)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.5);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.scorching_ray.green.02")
		.atLocation(casterToken)
		.duration(800)
		.fadeOut(100)
		.stretchTo(target)
		.waitUntilFinished(-500)
		.opacity(0.7);
	sequence
		.effect()
		.file("jb2a.impact.008.green")
		.atLocation(target)
		.scaleToObject(1.5);
}

await sequence.play();
