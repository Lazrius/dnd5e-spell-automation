import SequencerHelpers from './helpers.js';
import { registerSettings, effectAutomationEnabled } from './settings.js';

Hooks.once('init', () => {
	console.log('DnD Automations Starting.');
	window.SequencerHelpers = SequencerHelpers;

	registerSettings();

	Hooks.on('midi-qol.preItemRoll', preItemRoll);
});

/**
 * @param {Workflow} workflow
 */
const preItemRoll = async (workflow) => {
	if (!effectAutomationEnabled())
		return;
};
