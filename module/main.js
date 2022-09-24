import SequencerHelpers from './helpers.js';
import { registerSettings, effectAutomationEnabled, replaceExistingAe } from './settings.js';

import activeEffects from './dae/index.js';

Hooks.once('init', () => {
	console.log('DnD Automations Starting.');
	window.SequencerHelpers = SequencerHelpers;

	registerSettings();

	Hooks.on('preCreateItem', createOrUpdateItem);
	Hooks.on('preUpdateItem', createOrUpdateItem);

	Hooks.on('ready', () => {
		enableCompendiumMacroSearching();
	});
});

/**
 * When an item is created or updated, we should check if we have a matching active effect
 * and attempt to add it if we do
 * @param {Item} item
 * @param {ItemData} changes
 */
const createOrUpdateItem = async (item, changes) => {
	if (!effectAutomationEnabled())
		return;

	const effect = Object.entries(activeEffects).find(x => x[1].label === item.name);
	if (!effect)
		return;

	if (!changes.effects) {
		changes.effects = [];
	}

	if (changes.effects.length !== 0) {
		if (replaceExistingAe()) {
			// There are existing effects and we *do* want to replace with ours
			changes.effects.length = 0;
		} else {
			// If there are existing effects we don't want to try and add ours
			return;
		}
	}

	changes.effects.push(effect[1]);
};

const enableCompendiumMacroSearching = () => {
	// Enable support for compendium searching for macros
	// It's a hacky C++ style detour, but not error prone from what I can tell.
	const origGetName = game.macros.getName;
	game.macros.getName = function (name, {strict = false} = {}) {
		if (name.startsWith("Compendium")) {
			const packArray = name.split(".");
			const pack = game.packs.get(`${packArray[1]}.${packArray[2]}`);
			if (!pack) {
				ui.notifications.info(`DnD5e-Spell-Automations | Compendium ${packArray[1]}.${packArray[2]} was not found`);
				return;
			}
			
			const macroFilter = pack.index.filter((m) => m.name === packArray[3]);
			if (!macroFilter.length) {
				ui.notifications.info(`DnD5e-Spell-Automations | A macro named ${packArray[3]} was not found in Compendium ${packArray[1]}.${packArray[2]}`);
				return;
			}

			return pack.getDocument(macroFilter[0]._id);
		}

		// Perform original functionality instead.
		const member = origGetName.bind(this);
		return member(name, strict);
	};
};