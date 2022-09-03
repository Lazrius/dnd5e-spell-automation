declare interface ColorMatrixFilter {
    /**
     * Properties & default values:
     *     - hue [false]
     *     - brightness [1]
     *     - contrast [1]
     *     - saturate [1]
     */
    constructor(inData: any);
    isValid: boolean;
    values: {};
    setValue(key: any, value: any): void;
}
