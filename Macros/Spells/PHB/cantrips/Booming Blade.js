({
	name: "Booming Blade",
	id: "cmg0jtbfdwa0ugfi",
	spellType: "range"
});
// @endmeta

// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.static_electricity.02.blue")
	.scale(0.4)
	.atLocation(casterToken)
	.duration(4000)
	.fadeIn(100)
	.fadeOut(100);
sequence
	.effect()
	.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scale(0.5)
	.waitUntilFinished(-1200)
	.filter("Glow", { color: 0xadd8e6 })
	.opacity(0.8);
sequence
	.effect()
	.file("jb2a.rapier.melee.01.blue.1")
	.atLocation(casterToken)
	.stretchTo(target)
	.waitUntilFinished(-1000)
	.fadeIn(500)
	.fadeOut(1500);
await sequence.play();

	