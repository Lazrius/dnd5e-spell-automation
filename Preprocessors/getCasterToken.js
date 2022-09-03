// @import getWorkflow.js
const casterToken = canvas.tokens.get(workflow.tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
