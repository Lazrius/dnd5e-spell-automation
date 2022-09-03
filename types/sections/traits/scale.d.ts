declare interface ScaleTrait {
    _scaleMin: number;
    _scaleMax: number;
    _scaleIn: number;
    _scaleOut: number;
    /**
     *  A method that can take the following:
     *  - A number to set the scale uniformly
     *  - An object with x and y for non-uniform scaling
     *  - Two numbers which the Sequencer will randomly pick a uniform scale between
     *
     * @param {number|object} inScaleMin
     * @param {number} [inScaleMax] inScaleMax
     * @returns this
     */
    scale(inScaleMin: any, inScaleMax?: number): this;
    /**
     *  A method that can take the following:
     *  - A number to set the scale uniformly
     *  - An object with x and y for non-uniform scaling
     *  - Two numbers which the Sequencer will randomly pick a uniform scale between
     *
     * @param {number|object} inScaleMin
     * @param {number} [inScaleMax] inScaleMax
     * @returns this
     */
    scale(inScaleMin: any, inScaleMax?: number): this;
    /**
     *  Causes the effect to scale when it starts playing
     *
     * @param {number|object} scale
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    scaleIn(scale: any, duration: number, options?: any): this;
    /**
     *  Causes the effect to scale when it starts playing
     *
     * @param {number|object} scale
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    scaleIn(scale: any, duration: number, options?: any): this;
    /**
     *  Causes the effect to scale at the end of the effect's duration
     *
     * @param {number|object} scale
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    scaleOut(scale: any, duration: number, options?: any): this;
    /**
     *  Causes the effect to scale at the end of the effect's duration
     *
     * @param {number|object} scale
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    scaleOut(scale: any, duration: number, options?: any): this;
}

