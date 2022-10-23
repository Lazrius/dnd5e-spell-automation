({
	name: "Tasha's Caustic Brew",
	id: "wuot9906uprkbj82",
	spellType: "templates"
});
// @endmeta

// @include getTemplate.js
// @include helpers/getRayEndPos.js

const sequence = new Sequence();
sequence.effect()
	.file('jb2a.breath_weapons.acid.line.green')
	.atLocation({ x: template.x, y: template.y })
	.stretchTo(templateEndPos)
	.fadeOut(200);

await sequence.play();

await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template._id]);