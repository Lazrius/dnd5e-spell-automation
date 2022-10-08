({
	name: "Chromatic Orb",
	id: "6afjk09h2syj3xhv",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();
sequence
	.effect()
	.file('jb2a.moonbeam.01.intro.rainbow')
	.fadeOut(200)
	.attachTo(casterToken)
	.scaleToObject(2)
	.waitUntilFinished();

for (const target of targets) {
	sequence
		.effect()
		.file('jb2a.scorching_ray.01.rainbow02')
		.fadeIn(200)
		.fadeOut(200)
		.atLocation(casterToken)
		.waitUntilFinished(-750)
		.stretchTo(target);;
}

sequence.play();