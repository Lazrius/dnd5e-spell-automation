({
    name: "Remorhaz Cloak",
    id: "7zzvf76h0coaf2ae",
    spellType: "range"
});
// @endmeta
//This is for a homebrew item which on hit deals damage back to the attacker

// @include getCasterToken.js

let target = canvas.tokens.get(args[0].targets[0].id);
//let targetImg = Array.from(game.user.targets)[0].system.img;

const sequence = new Sequence();

SequencerHelpers.Glow(sequence, target);

sequence
    .effect()
    .file("jb2a.flames.01.orange")
    .attachTo(target)
    .fadeIn(500)
    .fadeOut(500)
    .waitUntilFinished();

await sequence.play();
