declare interface OpacityTrait {
    _opacity: number;
    _fadeIn: number;
    _fadeOut: number;
    /**
     * Sets the opacity of the effect. If used with ._fadeIn() and/or ._fadeOut(), this defines what the effect will fade to/from
     *
     * @param {number} inOpacity
     * @returns this
     */
    opacity(inOpacity: number): this;
    /**
     * Sets the opacity of the effect. If used with ._fadeIn() and/or ._fadeOut(), this defines what the effect will fade to/from
     *
     * @param {number} inOpacity
     * @returns this
     */
    opacity(inOpacity: number): this;
    /**
     * Causes the effect to fade in when played
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeIn(duration: number, options?: any): this;
    /**
     * Causes the effect to fade in when played
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeIn(duration: number, options?: any): this;
    /**
     * Causes the effect to fade out at the end of the effect's duration
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeOut(duration: number, options?: any): this;
    /**
     * Causes the effect to fade out at the end of the effect's duration
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeOut(duration: number, options?: any): this;
}

