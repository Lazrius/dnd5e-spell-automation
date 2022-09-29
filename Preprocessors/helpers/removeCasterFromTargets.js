targets = targets.filter(x => x != casterToken);
game.user.updateTokenTargets(targets.map(x => x.id));