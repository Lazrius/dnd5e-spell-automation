declare interface AnimationTrait {
    _animations: any;
    /**
     * Animates a property on the target of the animation.
     *
     * @param {string} inTarget
     * @param {string} inPropertyName
     * @param {object} inOptions
     *      @param {Number} inOptions.from       - a single number from which to animate
     *      @param {Number} inOptions.to         - a single number to which to animate
     *      @param {Number} inOptions.duration   - how long in ms the animation should take
     *      @param {Number} inOptions.delay      - inserts a delay in ms before the animation starts
     *      @param {String} inOptions.ease       - what type of easing the animation should use
     *      @param {Boolean} inOptions.gridUnits - if animating width or height, this will set it to work in the scene's grid units
     *      @param {Boolean} inOptions.fromEnd   - makes this animation play from the end, like fadeOut, scaleOut, etc
     *
     * @returns this
     */
    animateProperty(inTarget: string, inPropertyName: string, inOptions?: {
        from?: number;
        to?: number;
        duration?: number;
        delay?: number;
        ease?: string;
        gridUnits?: boolean;
        fromEnd?: boolean;
    }): this;
    /**
     * Animates a property on the target of the animation.
     *
     * @param {string} inTarget
     * @param {string} inPropertyName
     * @param {object} inOptions
     *      @param {Number} inOptions.from       - a single number from which to animate
     *      @param {Number} inOptions.to         - a single number to which to animate
     *      @param {Number} inOptions.duration   - how long in ms the animation should take
     *      @param {Number} inOptions.delay      - inserts a delay in ms before the animation starts
     *      @param {String} inOptions.ease       - what type of easing the animation should use
     *      @param {Boolean} inOptions.gridUnits - if animating width or height, this will set it to work in the scene's grid units
     *      @param {Boolean} inOptions.fromEnd   - makes this animation play from the end, like fadeOut, scaleOut, etc
     *
     * @returns this
     */
    animateProperty(inTarget: string, inPropertyName: string, inOptions?: {
        from: number;
        to: number;
        duration: number;
        delay: number;
        ease: string;
        gridUnits: boolean;
        fromEnd: boolean;
    }): this;
    /**
     * Loops a property between a set of values on the target
     *
     * @param {string} inTarget
     * @param {string} inPropertyName
     * @param {object} inOptions
     *      @param {Number} inOptions.from       - a single number from which to loop
     *      @param {Number} inOptions.to         - a single number to which to loop
     *      @param {Number} inOptions.values     - an array of values to loop between
     *      @param {Number} inOptions.duration   - how long in ms the loop should take
     *      @param {Number} inOptions.loops      - how many loops in total this animation should go through - if none are specified, the loop is indefinite
     *      @param {Number} inOptions.delay      - inserts a delay in ms before the animation starts
     *      @param {String} inOptions.ease       - what type of easing the animation should use
     *      @param {Boolean} inOptions.pingPong  - sets whether loop should interpolate to the first value after it reaches the first value, or simply set it to the first value
     *      @param {Boolean} inOptions.gridUnits - if animating width or height, this will set it to work in the scene's grid units
     *
     * @returns this
     */
    loopProperty(inTarget: string, inPropertyName: string, inOptions?: {
        from: number;
        to: number;
        values: number;
        duration: number;
        loops: number;
        delay: number;
        ease: string;
        pingPong: boolean;
        gridUnits: boolean;
    }): this;
    /**
     * Loops a property between a set of values on the target
     *
     * @param {string} inTarget
     * @param {string} inPropertyName
     * @param {object} inOptions
     *      @param {Number} inOptions.from       - a single number from which to loop
     *      @param {Number} inOptions.to         - a single number to which to loop
     *      @param {Number} inOptions.values     - an array of values to loop between
     *      @param {Number} inOptions.duration   - how long in ms the loop should take
     *      @param {Number} inOptions.loops      - how many loops in total this animation should go through - if none are specified, the loop is indefinite
     *      @param {Number} inOptions.delay      - inserts a delay in ms before the animation starts
     *      @param {String} inOptions.ease       - what type of easing the animation should use
     *      @param {Boolean} inOptions.pingPong  - sets whether loop should interpolate to the first value after it reaches the first value, or simply set it to the first value
     *      @param {Boolean} inOptions.gridUnits - if animating width or height, this will set it to work in the scene's grid units
     *
     * @returns this
     */
    loopProperty(inTarget: string, inPropertyName: string, inOptions?: {
        from: number;
        to: number;
        values: number;
        duration: number;
        loops: number;
        delay: number;
        ease: string;
        pingPong: boolean;
        gridUnits: boolean;
    }): this;
}

