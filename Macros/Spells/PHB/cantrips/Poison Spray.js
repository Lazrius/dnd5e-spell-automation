({
	name: "Poison Spray",
	id: "46zolefofwm6e0h2",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.conjuration")
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
	.file("jb2a.moonbeam.01.intro.green")
	.atLocation(casterToken)
	.fadeIn(100)
	.fadeOut(200)
	.duration(1200)
	.waitUntilFinished(-1500);

for (const target of targets)
{
	sequence
		.effect()
		.file("jb2a.breath_weapons.acid.line.green")
		.atLocation(casterToken)
		.stretchTo(target);
}

await sequence.play();
