// Templates work a little differently.

// @ifdef DEBUG
console.log(arguments);
console.log(args);
// @endif

const casterToken = args[1].sourceToken;
let targets = canvas.tokens.placeables.filter(x => x.isTargeted);
const template = args[1].templateData.data;
const position = { x: template.x, y: template.y};