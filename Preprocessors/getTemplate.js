const template = workflow.templateId;
if (!template) {
	ui.notifications.warn('This effect requires a template.');
	return;
}
