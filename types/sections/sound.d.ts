declare interface ISoundSection extends Section, FileTrait, AudioTrait, TimeTrait, UserTrait {}
declare class SoundSection extends ISoundSection {
	constructor(inSequence: any, inFile?: string);
    _file: string;
    _volume: number;
    _overrides: any[];
    /**
     * Adds a function that will run at the end of the sound serialization step, but before it is played. Allows direct
     * modifications of sound's data. For example, it could be manipulated to change which file will be used based
     * on the distance to the target.
     *
     * @param {function} inFunc
     * @returns {SoundSection}
     */
    addOverride(inFunc: Function): SoundSection;
    /**
     * @OVERRIDE
     * @returns {Promise}
     */
    run(): Promise<any>;
    /**
     * @returns {Promise}
     * @private
     */
    private _sanitizeSoundData;
    _isRange: boolean;
}

