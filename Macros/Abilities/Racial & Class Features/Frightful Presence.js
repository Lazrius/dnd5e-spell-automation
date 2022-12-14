({
	name: "Frightful Presence",
	id: "t4s3k32cr6d16hz8",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

let target = Array.from(game.user.targets)[0];

//To do - checking for if target saves or not.
//let targetSave = args[0].saves.length === 1;

const sequence = new Sequence();

sequence
	.sound()
	.file("/worlds/doip/sounds/dragonroar.mp3");

sequence
	.effect()
	.file("jb2a.extras.tmfx.inpulse.circle.03")
	.atLocation(casterToken)
	.filter("Glow", { color: 0xFFC300 })
	.duration(2000)
	.scale(1)
	.belowTokens()
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.energy_strands.complete.orange.01")
	.atLocation(casterToken)
	.duration(2500)
	.fadeIn(500)
	.fadeOut(300)
	.scale(1)
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.icon.fear.orange")
	.atLocation(casterToken)
	.duration(2500)
	.fadeIn(500)
	.fadeOut(300)
	.scaleToObject()
	.waitUntilFinished(-500);

sequence
	.effect()
	.file("jb2a.markers.fear.orange.02")
	.fadeIn(500)
	.fadeOut(500)
	.attachTo(target)
	.persist();
//   .playIf(targetSave)

await sequence.play();
