({
	name: "Sneak Attack",
	id: "6xtvl7nv156jm998",
	spellType: "static"
});
// @endmeta
// @include getCasterToken.js

const sequence = new Sequence();

const sneaks = [
	"blue",
	"dark_green",
	"dark_purple",
	"dark_red",
	"orange",
	"pink",
	"yellow"
];

sequence.effect()
	.file("jb2a.sneak_attack." + sneaks[Math.floor(Math.random() * sneaks.length)])
	.atLocation(casterToken)
	.duration(2000)
	.fadeIn(500)
	.fadeOut(500)
	.scaleToObject(1)
	.opacity(0.3)
	.filter("Glow", { color: 0xffffff });

await sequence.play();