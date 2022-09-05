({
	name: "Absorb Elements",
	id: "jpsypegwv7sg7jv0",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
	.atLocation(casterToken)
	.duration(4500)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.opacity(0.3)
	.filter("Glow", { color: 0xffffff })
	.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
sequence
	.effect()
	.file("jb2a.extras.tmfx.border.circle.inpulse.02.normal")
	.fadeIn(500)
	.fadeOut(500)
	.duration(4500)
	.scale(0.3)
	.atLocation(casterToken)
	.belowTokens();
sequence
	.effect()
	.file("jb2a.shield.01.outro_explode.blue")
	.fadeIn(500)
	.fadeOut(100)
	.atLocation(casterToken)
	.waitUntilFinished(-500)
	.scale(0.4);
sequence
	.effect()
	.file("jb2a.shield.01.outro_explode.red")
	.fadeIn(100)
	.fadeOut(100)
	.atLocation(casterToken)
	.waitUntilFinished(-500)
	.scale(0.4);
sequence
	.effect()
	.file("jb2a.shield.01.outro_explode.green")
	.fadeIn(100)
	.fadeOut(100)
	.atLocation(casterToken)
	.waitUntilFinished(-500)
	.scale(0.4);
sequence
	.effect()
	.file("jb2a.shield.01.outro_explode.yellow")
	.fadeIn(100)
	.fadeOut(100)
	.atLocation(casterToken)
	.scale(0.4);
await sequence.play();
