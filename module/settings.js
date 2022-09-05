export const moduleName = 'dnd5e-spell-automation';

export const registerSettings = () => {
	game.settings.register(moduleName, "enableAnimations", {
		name: "Enable Animations",
		hint: "Enable animation support so that when certain items or spells are used, an animation is played.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register(moduleName, "enableAutomation", {
		name: "Enable Active Effect Automation",
		hint: "When an item is used for the first time that doesn't have an active effect setup, but should have, automatically create the effect with preset values",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
};

export const animationsEnabled = () => game.settings.get(moduleName, 'enableAnimations');
export const effectAutomationEnabled = () => game.settings.get(moduleName, 'enableAutomation');
