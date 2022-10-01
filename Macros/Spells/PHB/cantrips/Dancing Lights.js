({
	name: "Dancing Lights",
	id: "yyebo46gis2iuzz7",
	spellType: "static"
});
// @endmeta

// @include getCasterToken.js

const lights = game.actors.filter(x => x.name.includes("Dancing light"))
if (lights.length === 0) {
	ui.notifications.warn("Unable to spawn entity. No matching actor found. Ensure they have been imported from the compendium.");
	return;
}

let totalDancingLights;
let currentDancingLightCount = 0;
const createDancingLight = async () => {
	if (typeof totalDancingLights !== "number" || totalDancingLights <= 0) {
		return;
    }

    const light = lights[Math.floor(Math.random() * lights.length)];

	const [id] = await warpgate.spawn(light.name, {}, {
		pre: async (location, updates) => {
			// When the user has clicked where they want it

			if (currentDancingLightCount === 0) {
				new Sequence()
					.effect()
					.file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
					.atLocation(casterToken)
					.duration(2000)
					.fadeIn(500)
					.fadeOut(500)
					.scale(0.5)
					.filter("Glow", { color: 0xffffbf })
					.scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
					.effect()
					.file("jb2a.moonbeam.01.intro.blue")
					.atLocation(casterToken)
					.fadeIn(100)
					.fadeOut(200)
					.duration(1200)
					.play();
			}
		},
		post: async (location, spawnedToken, updates, iteration) => {
			// When the token has been spawned

			new Sequence()
				.effect()
				.file("jb2a.toll_the_dead.blue.shockwave")
				.atLocation(location)
				.fadeOut(500)
				.randomRotation()
				.scale(0.5)
				.play();


			if (++currentDancingLightCount < totalDancingLights) {
				await createDancingLight();
			}
		}
	}, {
		controllingActor: casterToken.actor,
		collision: false,
	});

	const token = canvas.scene.tokens.get(id);
	const conc = casterToken.actor.effects.find(e => e.data.label === "Concentrating");
	if (conc) await conc.update({changes: conc.data.changes.concat({
		key: "flags.dae.deleteUuid",
		mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
		value: token.uuid
	})});

	token.update({ light: { bright : 1, dim: 15, color : '#ffffff', alpha: 0.5, angle: 360 }});
}

new Dialog({
	title: "Dancing Lights", content: `
        <div class="form-group">
            <label>Dancing Light Count: <span id="dancing-light-count">4</span></label>
            <input type="range" id="dancing-light-range" value="4" min="1" max="4" oninput="$('#dancing-light-count').html(this.value)"/>
        </div>
    `, buttons: {
		one: {
			label: "Done", callback: (html) => {
				totalDancingLights = parseInt(html.find("#dancing-light-range").val().toString());
				createDancingLight();
			}
		}
	}, default: "one"
}).render(true);
