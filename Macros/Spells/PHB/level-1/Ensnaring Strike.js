({
	name: "Ensnaring Strike",
	id: "f3e8yyl915d5effa",
	spellType: "static"
});
// @endmeta

// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.simple.conjuration")
	.atLocation(casterToken)
	.duration(1700)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xaaff00 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 })
	.opacity(0.5);
sequence
	.effect()
	.file("jb2a.shatter.green")
	.delay(200)
	.fadeIn(100)
	.fadeOut(500)
	.duration(1200)
	.scale(0.4)
	.atLocation(casterToken);
sequence
	.effect()
	.file("jb2a.fireflies.few.02.green")
	.attachTo(casterToken)
	.scale(0.5)
	.duration(4000)
	.fadeIn(500)
	.fadeOut(500);

for (const target of targets) {
	const distance = canvas.grid.measureDistance(casterToken, target);
	sequence
		.effect()
		.file("jb2a.arrow.physical.green")
		.fadeIn(500)
		.fadeOut(500)
		.atLocation(casterToken)
		.stretchTo(target)
		.waitUntilFinished(-300)
		.playIf(() => {
			return distance > 8;
		});
	sequence
		.effect()
		.file("jb2a.dagger.melee.fire.green")
		.fadeIn(500)
		.fadeOut(500)
		.atLocation(casterToken)
		.stretchTo(target)
		.waitUntilFinished(-1300)
		.playIf(() => {
			return distance <= 8;
		});
	sequence
		.effect()
		.file("jb2a.entangle.green")
		.attachTo(target)
		.scaleToObject(2)
		.duration(4000)
		.fadeIn(500)
		.fadeOut(500)
		.opacity(0.5)
		.belowTokens();
	sequence
		.effect()
		.file("jb2a.impact.004.green")
		.attachTo(target)
		.fadeIn(100)
		.fadeOut(100);
}
await sequence.play();
