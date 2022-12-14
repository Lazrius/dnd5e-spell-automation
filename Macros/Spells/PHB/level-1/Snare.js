({
	name: "Snare",
	id: "2euew14ibtahxxhe",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

await warpgate.spawn("Snare", {}, {
	pre: async (location) => {
		const seq = new Sequence();
		sequence
			.effect()
			.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
			.atLocation(casterToken)
			.duration(2000)
			.fadeIn(500)
			.fadeOut(500)
			.scale(0.5)
			.opacity(0.3)
			.filter("Glow", { color: 0xffffff })
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
			.file("jb2a.toll_the_dead.purple.shockwave")
			.atLocation(location)
			.fadeIn(500)
			.fadeOut(500)
			.scale(0.5)
			.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });

		await sequence.play();

		// Sleep for 500ms
		await (new Promise(resolve => setTimeout(resolve, 1200)));
	}
}, {
	collision: false
});

