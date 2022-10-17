({
    name: "Fireball Alt",
    id: "yjqwspfem8pj6s07",
    spellType: "range"
});
// @endmeta
// @include getCasterToken.js

//get the template id from the canvas and its positions.
const templatePosition = canvas.templates.placeables[canvas.templates.placeables.length - 1];
//get an array of the targets within the tempalte area.
const targetLocations = Array.from(game.user.targets);

let sequence = new Sequence();

sequence
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.evocation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0xffa500 })
    .waitUntilFinished(-500);

sequence
    .effect()
    .file("jb2a.fireball.beam.orange")
    .atLocation(casterToken)
    .stretchTo(templatePosition)
    .waitUntilFinished(-1800);

sequence
    .effect()
    .file("jb2a.fireball.explosion.orange")
    .atLocation(templatePosition)
    .waitUntilFinished(-2100);

//blast mark from the forgotten adventures site, you need to find your own blast mark or use the agreed one by JB2A and FA
sequence
    .effect()
    .file("jb2a.ground_cracks.orange.01")
    .atLocation(templatePosition)
    .fadeIn(300)
    .duration(10000)
    .fadeOut(350)
    .name(`fireball-impact-${templatePosition.system._id}`)
    .belowTokens();

//loop through targets and play only if failed save (to do)
for (let targetLoc of targetLocations) {
    sequence
        .effect()
        .file("jb2a.flames.01.orange")
        .filter("Glow", { color: 0xffa700 })
        .atLocation(targetLoc)
        .fadeIn(500)
        .fadeOut(500)
        .duration(2000);
}
sequence.thenDo(() => canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [templatePosition.system._id]));
await sequence.play();
