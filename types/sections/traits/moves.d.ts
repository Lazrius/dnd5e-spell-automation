declare interface MoveTrait {
    _moveTowards: number;
    _moveSpeed: number;
    /**
     * Sets the location to move the target object to
     *
     * @param {object|string} inTarget
     * @param {object} options
     * @returns this
     */
    moveTowards(inTarget: any, options?: any): this;
    /**
     * Sets the location to move the target object to
     *
     * @param {object|string} inTarget
     * @param {object} options
     * @returns this
     */
    moveTowards(inTarget: any, options?: any): this;
    /**
     * Sets the speed (pixels per frame) to move the target object
     *
     * @param {number} inSpeed
     * @returns this
     */
    moveSpeed(inSpeed: number): this;
    /**
     * Sets the speed (pixels per frame) to move the target object
     *
     * @param {number} inSpeed
     * @returns this
     */
    moveSpeed(inSpeed: number): this;
}