({
    name: "Mirror Image",
    id: "itulij3wp969a1yq",
    spellType: "range"
});
// @endmeta

// @include getCasterToken.js

let target = canvas.tokens.get(args[1]);
let targetImg = target.system.img;
if (args[0] === "on") {
    // If the dynamic active effect started
    const positions = [{
        x: [],
        y: []
    },
    {
        x: [],
        y: []
    },
    {
        x: [],
        y: []
    },
    ];
    const pi = 3.1415926535;
    for (let i = 0; i < 360; i += 3) {
        let angle = i;
        let x1 = 40 * Math.cos(angle * (pi / 180));
        let y1 = 40 * Math.sin(angle * (pi / 180));
        positions[0].x.push(x1);
        positions[0].y.push(y1);
    }
    for (let i = 0; i < 360; i += 3) {
        let angle = i;
        let x1 = -40 * Math.cos(angle * (pi / 180));
        let y1 = -40 * Math.sin(angle * (pi / 180));
        positions[2].x.push(x1);
        positions[2].y.push(y1);
    }
    positions[1].x = positions[0].x.slice().reverse();
    positions[1].y = positions[0].y.slice().reverse();

    const seq = new Sequence();
    sequence
        .effect()
        .file("jb2a.impact.004.dark_purple")
        .atLocation(casterToken)
        .fadeIn(500);
    sequence
        .effect()
        .file("jb2a.extras.tmfx.runes.circle.simple.illusion")
        .atLocation(casterToken)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", {
            color: 0x3c1361
        })
        .scaleIn(0, 500, {
            ease: "easeOutCubic"
        })
        .waitUntilFinished(-1000);
    seq.animation()
        .on(casterToken)
        .fadeOut(1000);
    sequence
        .effect()
        .file(targetImg)
        .fadeIn(1000)
        .fadeOut(1000)
        .attachTo(target)
        .loopProperty("sprite", "position.x", {
            values: positions[0].x,
            duration: 24,
            pingPong: false,
        })
        .loopProperty("sprite", "position.y", {
            values: positions[0].y,
            duration: 24,
            pingPong: false,
        })
        .persist()
        .scaleToObject(1)
        .opacity(0.5)
        .name(`mirror-image-1-${target.id}`);
    sequence
        .effect()
        .file(targetImg)
        .fadeIn(1000)
        .fadeOut(1000)
        .delay(500)
        .attachTo(target)
        .loopProperty("sprite", "position.x", {
            values: positions[1].x,
            duration: 24,
            pingPong: true,
        })
        .loopProperty("sprite", "position.y", {
            values: positions[1].y,
            duration: 24,
            pingPong: true,
        })
        .persist()
        .scaleToObject(1)
        .opacity(0.5)
        .name(`mirror-image-2-${target.id}`);
    sequence
        .effect()
        .file(targetImg)
        .fadeIn(1000)
        .fadeOut(1000)
        .delay(500)
        .attachTo(target)
        .loopProperty("sprite", "position.y", {
            values: positions[2].x,
            duration: 20,
            pingPong: false,
        })
        .loopProperty("sprite", "position.x", {
            values: positions[2].y,
            duration: 20,
            pingPong: false,
        })
        .persist()
        .scaleToObject(1)
        .opacity(0.5)
        .name(`mirror-image-3-${target.id}`);
    await sequence.play();
}
if (args[0] === "off") {
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({
        name: `mirror-image-1-${target.id}`,
        object: target.id
    });
    Sequencer.EffectManager.endEffects({
        name: `mirror-image-2-${target.id}`,
        object: target.id
    });
    Sequencer.EffectManager.endEffects({
        name: `mirror-image-3-${target.id}`,
        object: target.id
    });

    const seq = new Sequence();
    seq.animation()
        .on(casterToken)
        .fadeIn(1000)
        .play;
}
