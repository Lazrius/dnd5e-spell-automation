({
    name: "Shadow Of Moil",
    id: "kz9uergly2qn1cjz",
    spellType: "range"
});
// @endmeta
await Sequencer.Preloader.preloadForClients([
    "jb2a.energy_strands.complete.dark_red.01",
    "jb2a.darkness.black",
    "jb2a.fire_ring.500px.red"
], false);

// @include getCasterToken.js

const sequence = new Sequence();
sequence
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.necromancy")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .opacity(0.5)
    .filter("Glow", { color: 0xffffff })
    .scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 })
    .waitUntilFinished(-500);

sequence
    .effect()
    .fadeIn(500)
    .file("jb2a.energy_strands.complete.dark_red.01")
    .persist()
    .scale(0.4)
    .attachTo(casterToken)
    .name(`ShadowOfMoil_${casterToken.system._id}`)
    .wait(1000);

sequence
    .effect()
    .fadeIn(500)
    .file("jb2a.darkness.black")
    .belowTokens()
    .opacity(0.3)
    .size(canvas.grid.size * 5)
    .persist()
    .attachTo(casterToken)
    .name(`ShadowOfMoilDarkness_${casterToken.system._id}`);

sequence
    .effect()
    .file("jb2a.fire_ring.500px.red")
    .atLocation(casterToken)
    .fadeIn(100)
    .scaleToObject(1.25)
    .name(`FireRing_ShadowOfMoil_${casterToken.system._id}`)
    .persist();

await sequence.play();
