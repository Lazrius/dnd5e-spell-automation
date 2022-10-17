({
    name: "Dragons Breath Active Item",
    id: "ax1nmxfjfekb3ie9",
    spellType: "range"
});
// @endmeta
const template = canvas.templates.placeables[canvas.templates.placeables.length - 1];
let damageType = args[0].item.system.damage.parts[0][1];
let damageVisualEffect;

switch (damageType) {
    case "acid":
        damageVisualEffect = "jb2a.breath_weapons.poison.cone.green";
        break;
    case "cold":
        damageVisualEffect = "jb2a.breath_weapons.cold.cone.blue";
        break;
    case "fire":
        damageVisualEffect = "jb2a.breath_weapons.fire.cone.orange.01";
        break;
    case "lightning":
        damageVisualEffect = "jb2a.breath_weapons.lightning.line.blue";
        break;
    case "poison":
        damageVisualEffect = "jb2a.breath_weapons.poison.cone.purple";
        break;
    default:
        damageVisualEffect = "jb2a.breath_weapons.fire.cone.orange.01";
        break;
}

const sequence = new Sequence();
sequence
    .effect()
    .file(damageVisualEffect)
    .atLocation(template, { cacheLocation: true })
    .stretchTo(template, { cacheLocation: true });
await sequence.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);
