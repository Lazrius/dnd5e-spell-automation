declare interface RotationTrait {
    _angle: number;
    _rotateIn: number;
    _rotateOut: number;
    _randomRotation: number;
    _rotateTowards: number;
    /**
     * The object gets a random rotation, which means it should not be used with .stretchTo()
     *
     * @param {boolean} [inBool=true] inBool
     * @returns this
     */
    randomRotation(inBool?: boolean): this;
    /**
     * The object gets a random rotation, which means it should not be used with .stretchTo()
     *
     * @param {boolean} [inBool=true] inBool
     * @returns this
     */
    randomRotation(inBool?: boolean): this;
    /**
     * Sets the rotation of the object, which is added on top of the calculated rotation after .rotateTowards() or .randomRotation()
     *
     * @param {number} inRotation
     * @returns this
     */
    rotate(inRotation: number): this;
    /**
     * Sets the rotation of the object, which is added on top of the calculated rotation after .rotateTowards() or .randomRotation()
     *
     * @param {number} inRotation
     * @returns this
     */
    rotate(inRotation: number): this;
    /**
     *  Causes the object to rotate when it starts playing
     *
     * @param {number} degrees
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    rotateIn(degrees: number, duration: number, options?: any): this;
    /**
     *  Causes the object to rotate when it starts playing
     *
     * @param {number} degrees
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    rotateIn(degrees: number, duration: number, options?: any): this;
    /**
     *  Causes the object to rotate at the end of the effect's duration
     *
     * @param {number} degrees
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    rotateOut(degrees: number, duration: number, options?: any): this;
    /**
     *  Causes the object to rotate at the end of the effect's duration
     *
     * @param {number} degrees
     * @param {number} duration
     * @param {object} [options] options
     * @returns this
     */
    rotateOut(degrees: number, duration: number, options?: any): this;
}

