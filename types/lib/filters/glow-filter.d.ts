declare interface GlowFilter {
    /**
     * Properties & default values:
     *     - distance [10]
     *     - outerStrength [4]
     *     - innerStrength [0]
     *     - color [0xffffff]
     *     - quality [0.1]
     *     - knockout [false]
     */
    constructor(inData?: {});
    isValid: boolean;
}
