import SequencerHelpers from './helpers.js';
import { registerSettings, effectAutomationEnabled, replaceExistingAe } from './settings.js';

import activeEffects from './dae/index.js';

Hooks.once('init', () => {
	console.log('DnD Automations Starting.');
	window.SequencerHelpers = SequencerHelpers;

	registerSettings();

	Hooks.on('preCreateItem', createOrUpdateItem);
	Hooks.on('preUpdateItem', createOrUpdateItem);
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