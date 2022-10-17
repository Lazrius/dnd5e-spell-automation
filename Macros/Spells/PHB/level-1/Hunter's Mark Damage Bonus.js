({
	name: "Hunter's Mark Damage Bonus",
	id: "h75buw4ex55esw6q",
	spellType: "range"
});
// @endmeta

// @include getCasterToken.js

if (!["mwak", "rwak"].includes(workflow.item.system.actionType)) {
	return {}
}

const targetUuid = workflow.hitTargets[0].uuid;
// only on the marked target
if (targetUuid !== getProperty(workflow.actor.flags, "midi-qol.huntersMark")) {
	return {};
}

const damageType = workflow.item.system.damage.parts[0][1];
const diceMult = workflow.isCritical ? 2 : 1;
return { damageRoll: `${diceMult}d6[${damageType}]`, flavor: "Hunters Mark Damage" }