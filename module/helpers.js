export default class SequencerHelpers {
	static Glow(seq, target, color = 0xFFA500) {
		seq
			.effect()
			.from(target)
			.duration(2500)
			.fadeIn(500)
			.fadeOut(500)
			.atLocation(target)
			.filter("Glow", { color })
			.scaleToObject();
	}
}
