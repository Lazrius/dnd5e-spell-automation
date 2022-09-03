declare class Sequence {
	constructor(moduleName?: string);
    id: string;
    moduleName: string;
    sections: Section[];
    nameOffsetMap: boolean;
    effectIndex: number;
    sectionToCreate: Section;
    /**
     * Plays all of this sequence's sections
     *
     * @returns {Promise}
     */
    play(): Promise;
    /**
     * Creates a section that will run a function.
     *
     * @param {function} inFunc
     * @returns {Sequence} this
     */
    thenDo(inFunc: () => void): Sequence;
    /**
     * Creates a section that will run a macro based on a name or a direct reference to a macro.
     *
     * @param {string|Macro} inMacro
     * @param {*} args
     * @returns {Sequence} this
     */
    macro(inMacro: string | Macro, ...args: any): Sequence;
    /**
     * Creates an effect section. Until you call .then(), .effect(), .sound(), or .wait(), you'll be working on the Effect section.
     *
     * @param {string} [inFile] inFile
     * @returns {EffectSection}
     */
    effect(inFile?: string): EffectSection;
    /**
     * Creates a sound section. Until you call .then(), .effect(), .sound(), or .wait(), you'll be working on the Sound section.
     *
     * @param {string} [inFile] inFile
     * @returns {SoundSection}
     */
    sound(inFile?: string): SoundSection;
    /**
     * Creates an animation. Until you call .then(), .effect(), .sound(), or .wait(), you'll be working on the Animation section.
     *
     * @param {Token|Tile} [inTarget=false] inTarget
     * @returns {AnimationSection}
     */
    animation(inTarget?: Token | Tile): AnimationSection;
    /**
     * Causes the sequence to wait after the last section for as many milliseconds as you pass to this method. If given
     * a second number, a random wait time between the two given numbers will be generated.
     *
     * @param {number} [msMin=1] minMs
     * @param {number} [msMax=1] maxMs
     * @returns {Sequence} this
     */
    wait(msMin?: number, msMax?: number): Sequence;
    /**
     * Adds the sections from a given Sequence to this Sequence
     *
     * @param {Sequence|FunctionSection|EffectSection|AnimationSection|SoundSection} inSequence
     * @returns {Sequence} this
     */
    addSequence(inSequence: Sequence | FunctionSection | EffectSection | AnimationSection | SoundSection): Sequence;
    _createCustomSection(...args: any[]): any;
    _createWaitSection(ms?: number): FunctionSection;
    _showWarning(self: any, func: any, warning: any, notify: any): void;
    _customError(self: any, func: any, error: any): Error;
}
