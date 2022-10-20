({
	name: "Armor of Agathys (ACTIVE)",
	id: "qvtotpe65lcojvf5",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file('jb2a.shield.02.intro.blue')
	.atLocation(casterToken)
	.fadeIn(200)
	.fadeOut(200)
	.scaleToObject();

for (const target of targets) {
	sequence
		.effect()
		.file('jb2a.side_impact.ice_shard.blue')
		.fadeIn(200)
		.atLocation(casterToken)
		.rotateTowards(target)
		.fadeOut(200)
		.scaleToObject(1.5);
}

sequence.play();