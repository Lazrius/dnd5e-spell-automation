declare class Section {
	constructor(inSequence: any);
    sequence: any;
    _playIf: boolean;
    _waitUntilFinished: boolean;
    _async: boolean;
    _waitUntilFinishedDelay: number[];
    _repetitions: number;
    _currentRepetition: number;
    _repeatDelayMin: number;
    _repeatDelayMax: number;
    _repeatDelay: number;
    _delayMin: number;
    _delayMax: number;
    _basicDelay: number;
    _duration: boolean;
    /**
     * Method overwritten by inheriting interfacees, which is called just before the "run" method is called (see below)
     *
     * @returns {Promise<void>}
     * @protected
     */
    protected preRun(): Promise<void>;
    /**
     * Method overwritten by inheriting interfacees, which is called when this section is executed by the Sequence
     *
     * @returns {Promise<void>}
     * @protected
     */
    protected run(): Promise<void>;
    /**
     * Method overwritten by inheriting interfacees, which stores data or prepares data before the Sequence executes it (see EffectsSection)
     *
     * @protected
     */
    protected _initialize(): Promise<void>;
    /**
     * Method overwritten by inheriting interfacees. Inheriting interfacees uses the following to apply traits to themselves:
     * - Object.assign(this.constructor.prototype, trait)
     *
     * @protected
     */
    protected _applyTraits(): void;
    /** ------------------------------------------------------------------------------------------------------------------------------ *
     * Methods below this point should NOT be overridden by child instances of the interface, they are integral to the sequence functioning
     * ------------------------------------------------------------------------------------------------------------------------------- */
    /**
     * Causes the section to be repeated n amount of times, with an optional delay. If given inRepeatDelayMin
     * and inRepeatDelayMax, a random repetition delay will be picked for every repetition
     *
     * @param {number} inRepetitions
     * @param {number} inRepeatDelayMin
     * @param {number} inRepeatDelayMax
     * @returns {this} this
     */
    repeats(inRepetitions: number, inRepeatDelayMin: number, inRepeatDelayMax: number): this;
    /**
     * Causes the effect or sound to not play, and skip all delays, repetitions, waits, etc. If you pass a function,
     * the function should return something false-y if you do not want the effect or sound to play.
     *
     * @param {boolean|function} inCondition
     * @returns {this} this
     */
    playIf(inCondition: boolean | (() => void)): this;
    /**
     * Causes the section to finish running before starting the next section.
     *
     * @param {number} [minDelay=0] minDelay
     * @param {number/null} [maxDelay=null] maxDelay
     * @returns {this} this
     */
    waitUntilFinished(minDelay?: number, maxDelay?: any): this;
    /**
     * Causes each effect or sound to finish playing before the next one starts playing. This differs from
     * .waitUntilFinished() in the sense that this is for each repetition, whilst .waitUntilFinished() is
     * for the entire section.
     *
     * @returns {this} this
     */
    async(): this;
    /**
     * Delays the effect or sound from being played for a set amount of milliseconds. If given a second number, a
     * random delay between the two numbers will be generated.
     *
     * @param {number} [msMin=1] minMs
     * @param {number} [msMax=1] maxMs
     * @returns {this} this
     */
    delay(msMin?: number, msMax?: number): this;
    /**
     * Overrides the duration of an effect or sound
     *
     * @param {number} inDuration
     * @returns {this} this
     */
    duration(inDuration: number): this;
    /**
     * @protected
     */
    protected _shouldPlay(): Promise<any>;
    /**
     * @protected
     */
    protected _validateLocation(inLocation: any): any;
    /**
     * @protected
     */
    protected _execute(): Promise<any>;
    /**
     * @protected
     */
    protected _delayBetweenRepetitions(): Promise<any>;
    /**
     * @protected
     */
    protected get _shouldAsync(): boolean;
    /**
     * @protected
     */
    protected get shouldWaitUntilFinished(): boolean;
    /**
     * @protected
     */
    protected get _waitAnyway(): boolean;
    /**
     * @protected
     */
    protected get _isLastSection(): boolean;
    /**
     * @protected
     */
    protected get _isLastRepetition(): boolean;
    /**
     * @protected
     */
    protected get _currentWaitTime(): any;
}
