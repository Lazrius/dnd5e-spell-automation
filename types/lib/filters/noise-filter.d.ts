declare interface NoiseFilter {
    /**
     * Properties & default values:
     *     - noise [0.5]
     *     - seed [Math.random()]
     */
    constructor(inData?: {});
    isValid: boolean;
}
