declare interface AudioTrait {
    _volume: number;
    _fadeInAudio: number;
    _fadeOutAudio: number;
    /**
     * Sets the volume of the sound.
     *
     * @param {number} inVolume
     * @returns this
     */
    volume(inVolume: number): this;
    /**
     * Sets the volume of the sound.
     *
     * @param {number} inVolume
     * @returns this
     */
    volume(inVolume: number): this;
    /**
     * Causes the animated section to fade in its audio (if any) when played
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeInAudio(duration: number, options?: any): this;
    /**
     * Causes the animated section to fade in its audio (if any) when played
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeInAudio(duration: number, options?: any): this;
    /**
     * Causes the audio to fade out at the end of the animated section's duration
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeOutAudio(duration: number, options?: any): this;
    /**
     * Causes the audio to fade out at the end of the animated section's duration
     *
     * @param {number} duration     How long the fade should be
     * @param {object} [options]    Additional options, such as easing and delay
     * @returns this
     */
    fadeOutAudio(duration: number, options?: any): this;
}

