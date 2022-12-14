({
	name: "Ice Knife",
	id: "m0kj4ha0vjnczsrn",
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
	.filter("Glow", { color: 0xD7E5F0 })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
	
sequence
	.effect()
	.file("jb2a.shield_themed.above.ice.03.blue")
	.atLocation(casterToken)
	.fadeIn(500)
	.duration(4000)
	.fadeOut(500)
	.opacity(0.5)
	.scale(0.5);

for (const target of targets)
{
	sequence
		.effect()
		.file("jb2a.bolt.cold.blue")
		.atLocation(casterToken)
		.stretchTo(target)
		.waitUntilFinished(-1400);
	sequence
		.effect()
		.file("jb2a.side_impact.ice_shard.blue")
		.atLocation(casterToken)
		.rotateTowards(target)
		.fadeIn(100)
		.fadeOut(100)
		.scale(0.5);
	sequence
		.effect()
		.file("jb2a.impact_themed.ice_shard.blue")
		.attachTo(target)
		.fadeIn(500)
		.fadeOut(500)
		.waitUntilFinished(-2000)
		.scaleToObject(2);
	sequence
		.effect()
		.file("jb2a.ice_spikes.radial.burst.white")
		.attachTo(target)
		.fadeIn(100)
		.fadeOut(100)
		.scaleToObject(2)
		.waitUntilFinished(-1000);
	sequence
		.effect()
		.file("jb2a.impact_themed.ice_shard.blue")
		.attachTo(target)
		.fadeIn(500)
		.fadeOut(500)
		.scaleToObject(2);
}

await sequence.play();