// Templates work a little differently.

const casterToken = args[1].sourceToken;
let targets = canvas.tokens.placeables.filter(x => x.isTargeted);
const template = args[1].templateData.data;