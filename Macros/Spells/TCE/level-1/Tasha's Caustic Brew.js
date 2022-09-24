({
	name: "Tasha's Caustic Brew",
	id: "wuot9906uprkbj82",
	spellType: "templates"
});
// @endmeta

// @include getTemplate.js
// @include helpers/getRayEndPos.js

console.log("Tasha's Cast");
console.log(arguments);

const templateEndPos = getRayEndPos(template);

console.log(template);
console.log(templateEndPos);

const sequence = new Sequence();
sequence.effect()
	.file('jb2a.breath_weapons.acid.line.green')
	.atLocation({ x: template.x, y: template.y})
	.stretchTo(templateEndPos)
	.fadeOut(200);

await sequence.play();
