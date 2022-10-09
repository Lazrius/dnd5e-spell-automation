// @ifdef DEBUG
console.log(arguments);
console.log(args);
// @endif

// If source token is not present, then we should have a second set of options where tokenUuid is visible
let target = args[1].sourceToken;
if (!target) {
	target = await fromUuid(args[1].tokenUuid);
	// @ifdef DEBUG
	console.log(target);
	// @endif
	if (!target) {
		ui.notifications.error("dnd5e spell automation: no valid target token");
		return;
	}
}