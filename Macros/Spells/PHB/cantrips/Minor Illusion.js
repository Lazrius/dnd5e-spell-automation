({
	name: "Minor Illusion",
	id: "1e50qzk752dh95mo",
	spellType: "templates"
});
// @endmeta
// @include getTemplate.js

const lights = game.actors.filter(x => x.name.includes("Dancing light"))
if (lights.length === 0) {
	ui.notifications.warn("Unable to spawn entity. No matching actor found. Ensure they have been imported from the compendium.");
	return;
}

const [id] = await warpgate.spawn(lights[Math.floor(Math.random() * lights.length)].name, {}, {
	pre: async (location) => {
		const sequence = new Sequence();
		sequence
			.effect()
			.file("jb2a.extras.tmfx.runes.circle.outpulse.illusion")
			.atLocation(casterToken)
			.duration(2000)
			.fadeIn(500)
			.fadeOut(500)
			.scale(0.5)
			.opacity(0.3)
			.filter("Glow", { color: 0xffffbf })
			.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });
		sequence
			.effect()
			.file("jb2a.moonbeam.01.intro.rainbow")
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
			.scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 });

		await sequence.play();
	}
}, {
	collision: false
});

const token = canvas.scene.tokens.get(id);
const conc = casterToken.actor.effects.find(e => e.label === "Concentrating");
if (conc) await conc.update({
	changes: conc.changes.concat({
		key: "flags.dae.deleteUuid",
		mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
		value: token.uuid
	})
});

if (template) {
	await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
}