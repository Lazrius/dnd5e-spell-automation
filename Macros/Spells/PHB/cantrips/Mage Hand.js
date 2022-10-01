({
	name: "Mage Hand",
	id: "n0rcalcgb8k5g5wf",
	spellType: "static"
});
// @endmeta
// @include getCasterToken.js

const hands = game.actors.filter(x => x.name.includes("Arcane Hand") && !x.name.includes("Rock"))
if (hands.length === 0) {
	ui.notifications.warn("Unable to spawn entity. No matching actor found. Ensure they have been imported from the compendium.");
	return;
}

await warpgate.spawn(hands[Math.floor(Math.random() * hands.length)].name, {
	actor: {
		"data.traits.size": "med",
	}
}, {
	pre: async (location) => {
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
			.filter("Glow", { color: 0xa1c4fd })
			.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
		sequence
			.effect()
			.file("jb2a.moonbeam.01.intro.blue")
			.atLocation(casterToken)
			.fadeIn(100)
			.fadeOut(200)
			.duration(1200)
			.waitUntilFinished(-500);
		sequence
			.effect()
			.file("jb2a.toll_the_dead.blue.shockwave")
			.atLocation(location)
			.fadeIn(500)
			.fadeOut(500)
			.scale(0.5)
			.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 })
			.filter("Glow", { color: 0xa1c4fd });

		await sequence.play();
	}
}, {
	collision: false
});