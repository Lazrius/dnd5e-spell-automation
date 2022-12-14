({
    name: "Heroism",
    id: "c800tyovswoytfje",
    spellType: "range"
});
// @endmeta
// @include getCasterToken.js

let target = canvas.tokens.get(args[0].targets[0].id);
let targetImg = Array.from(game.user.targets)[0].system.img;

const sequence = new Sequence();

sequence
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .waitUntilFinished(-500);

sequence
    .effect()
    .file("jb2a.markers.light.loop.blue")
    .atLocation(casterToken)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .waitUntilFinished(-500);

sequence
    .effect()
    .file("jb2a.swirling_sparkles.01.blue")
    .attachTo(target)
    .waitUntilFinished(-250);

sequence
    .effect()
    .file(targetImg)
    .fadeOut(500)
    .attachTo(target)
    .scaleIn(0, 500, { ease: "easeInCubic", delay: 0 })
    .scaleToObject(3)
    .waitUntilFinished(-250);

sequence
    .effect()
    .file(targetImg)
    .fadeOut(500)
    .attachTo(target)
    .scaleIn(0, 500, { ease: "easeInCubic", delay: 0 })
    .scaleToObject(3)
    .waitUntilFinished(-250);

sequence
    .effect()
    .file("jb2a.ward.star.yellow.02")
    .attachTo(target)
    .fadeIn(500)
    .fadeOut(500)
    .scaleToObject(2.5)
    .persist()
    .belowTokens();

await sequence.play();
