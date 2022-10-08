({
	name: "Armor of Agathys AE",
	id: "wqycefztbplutm4n",
	spellType: "aefx"
});
// @endmeta
// @include getTargetDae.js

const agathysEffect = async () => {
	const sequence = new Sequence();
	sequence
		.effect()
		.file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
		.atLocation(target)
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
		.atLocation(target)
		.fadeIn(100)
		.fadeOut(200)
		.duration(1200)
		.waitUntilFinished(-500);
	sequence
		.effect()
		.file("jb2a.ice_spikes.radial.burst.white")
		.scale(0.45)
		.atLocation(target)
		.fadeIn(500)
		.fadeOut(500)
		.duration(1500)
		.belowTokens();
	await sequence.play();
};

const spellName = "Armor of Agathys (ACTIVE)";

if(args[0] === "on") {
	await agathysEffect();

	const sequence = new Sequence();
	sequence
		.effect()
		.file('jb2a.shield_themed.below.ice.03.blue')
		.name(`aoa-${target.id}`)
		.fadeIn(500)
		.attachTo(target)
		.scaleToObject()
		.persist();
	await sequence.play();

	const itemData = args[1].efData.flags.dae.itemData;
	
	await target.actor.createEmbeddedDocuments('Item', [{
		name: spellName,
		type: "spell",
		img: "icons/magic/water/heart-ice-freeze.webp",
		data: {
			description: {
				value: `<div class="rd__b  rd__b--3"><p>A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.</p><div class="rd__spc-inline-post"></div></div><div class="rd__b  rd__b--3"><div class="rd__b  rd__b--3"><span class="rd__h rd__h--3" data-title-index="6"> <span class="entry-title-inner">At Higher Levels.</span></span> <p>When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.</p><div class="rd__spc-inline-post"></div></div><div class="rd__spc-inline-post"></div></div>`,
			},
			activation: {
				type: "none",
				cost: 0
			},
			target: {
				value: 1,
				units: "",
				type: "creature"
			},
			damage: {
				parts: [
					[(itemData.data.level * 5).toString(), "cold"]
				]
			},
			level: 0,
			school: "abj",
			source: "PHB (SPA)",
		}
	}]);

	await target.actor.update({ 
		data: { 
			attributes: {
				hp: {
					temp: (target.actor.data.data.attributes.temp || 0) + itemData.data.level * 5
				}
			}
		} 
	});
} else if (args[0] === "off") {
	Sequencer.EffectManager.endEffects({
		name: `aoa-${target.id}`,
		object: target.id
	});

	const item = target.actor.data.items.find(i => i.name === spellName);
	if (item) {
		target.actor.deleteEmbeddedDocuments('Item', [item.id]);
	}

	const itemData = args[1].efData.flags.dae.itemData;
	let newTemp = (target.actor.data.data.attributes.temp || 0) - itemData.data.level * 5;
	if (newTemp < 0)
		newTemp = 0;

	await target.actor.update({ 
		data: { 
			attributes: {
				hp: {
					temp: newTemp
				}
			}
		} 
	});
}