declare interface TimeTrait {
    _hasTime: boolean;
    _isRange: boolean;
    _startTime: number;
    _startPerc: number;
    _endTime: number;
    _endPerc: number;
    /**
     * Sets the start and end time of the section, playing only that range
     *
     * @param {number} inMsStart
     * @param {number} inMsEnd
     * @returns this
     */
    timeRange(inMsStart: number, inMsEnd: number): this; 
    /**
     * Sets the start and end time of the section, playing only that range
     *
     * @param {number} inMsStart
     * @param {number} inMsEnd
     * @returns this
     */
    timeRange(inMsStart: number, inMsEnd: number): this;
    /**
     * Sets the start time of the section.
     *
     * @param {number} inMs
     * @returns this
     */
    startTime(inMs: number): this;
    /**
     * Sets the start time of the section.
     *
     * @param {number} inMs
     * @returns this
     */
    startTime(inMs: number): this;
    /**
     * Sets the start time of the section based on a percentage from its total duration.
     *
     * @param {number} inPercentage
     * @returns this
     */
    startTimePerc(inPercentage: number): this;
    /**
     * Sets the start time of the section based on a percentage from its total duration.
     *
     * @param {number} inPercentage
     * @returns this
     */
    startTimePerc(inPercentage: number): this;
    /**
     * Sets the ending time of the section (from the end).
     *
     * @param {number} inMs
     * @returns this
     */
    endTime(inMs: number): this;
    /**
     * Sets the ending time of the section (from the end).
     *
     * @param {number} inMs
     * @returns this
     */
    endTime(inMs: number): this;
    /**
     * Sets the ending time of the section based on a percentage from the total duration.
     *
     * @param {number} inPercentage
     * @returns this
     */
    endTimePerc(inPercentage: number): this;
    /**
     * Sets the ending time of the section based on a percentage from the total duration.
     *
     * @param {number} inPercentage
     * @returns this
     */
    endTimePerc(inPercentage: number): this;
}

