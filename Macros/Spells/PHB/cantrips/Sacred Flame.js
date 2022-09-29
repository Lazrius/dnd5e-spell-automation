({
	name: "Sacred Flame",
	id: "rojoxol72kdbsljv",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js
// @include getTargets.js

const sequence = new Sequence();

sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.evocation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.filter("Glow", { color: 0xFFA500 })
	.waitUntilFinished(-500);

for (const target of targets) {
	sequence
		.effect()
		.file("jb2a.disintegrate.orangepink")
		.atLocation({ x: target.center.x, y: target.center.y - (canvas.grid.size * 2) })
		.stretchTo(target)
		.waitUntilFinished(-500);

	SequencerHelpers.Glow(sequence, target);

	sequence
		.effect()
		.file("jb2a.flames.01.orange")
		.attachTo(target)
		.fadeIn(500)
		.fadeOut(500)
		.waitUntilFinished();
}

await sequence.play();
