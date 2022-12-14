({
	name: "Unseen Servant",
	id: "udn7pwlg3gp5amfl",
	spellType: "range"
});
// @endmeta
// @include getCasterToken.js

await warpgate.spawn("Unseen Servant", {}, {
	pre: async (location) => {
		const seq = new Sequence();
		sequence
			.effect()
			.file("jb2a.extras.tmfx.runes.circle.inpulse.conjuration")
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

		// Sleep for 500ms
		await (new Promise(resolve => setTimeout(resolve, 1200)));
	}
}, {
	collision: false
});
