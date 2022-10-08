const moduleName = 'dnd5e-spell-automation';
const moduleSettings = {
	animationsEnabled: game.settings.get(moduleName, 'enableAnimations'),
	effectAutomationEnabled: game.settings.get(moduleName, 'enableAutomation'),
	replaceExistingAe: game.settings.get(moduleName, 'replaceExistingAE'),
	disableLoreUnfriendlyAnimations: game.settings.get(moduleName, 'disableLoreUnfriendlyAnimations')
};