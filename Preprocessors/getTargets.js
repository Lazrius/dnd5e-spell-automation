const targets = workflow.targets;
if (targets.size === 0) {
	ui.notifications.warn("Please target at least one token to use this ability.");
	return;
}
