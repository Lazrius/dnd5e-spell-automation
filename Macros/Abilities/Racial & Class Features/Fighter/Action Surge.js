// @include getCasterToken.js

const sequence = new Sequence();
sequence
	.effect()
	.file("jb2a.explosion.02.yellow")
	.atLocation(casterToken)
	.fadeIn(100)
	.randomRotation();
sequence
	.effect()
	.file("jb2a.divine_smite.caster.yellowwhite")
	.fadeIn(100)
	.fadeOut(100)
	.atLocation(casterToken)
	.randomRotation();
await sequence.play();
