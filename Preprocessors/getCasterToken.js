// @include getWorkflow.js
// @ifdef DEBUG
console.log(arguments);
console.log(workflow);
// @endif

let casterToken;

// Workflow will be a string of on/off for DAE effects
if (typeof workflow === 'string') {
	casterToken = arguments[0].token;
} else {
	casterToken = canvas.tokens.get(workflow.tokenId);
}

if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
