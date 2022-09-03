declare namespace flagManager {
    const flagAddBuffer: Map<any, any>;
    const flagRemoveBuffer: Map<any, any>;
    const _latestFlagVersion: boolean;
    /**
     * Sanitizes the effect data, accounting for changes to the structure in previous versions
     *
     * @param inDocument
     * @param preCreate
     * @returns {array}
     */
    function getFlags(inDocument: any, { preCreate }?: {
        preCreate?: boolean;
    }): any[];
    /**
     * Sanitizes the effect data, accounting for changes to the structure in previous versions
     *
     * @param inDocument
     * @param preCreate
     * @returns {array}
     */
    function getFlags(inDocument: any, { preCreate }?: {
        preCreate?: boolean;
    }): any[];
    const migrations: {
        "2.0.0": (inDocument: any, effectData: any) => any;
        "2.0.6": (inDocument: any, effectData: any) => any;
        "2.0.8": (inDocument: any, effectData: any) => any;
        "2.0.9": (inDocument: any, effectData: any) => any;
        "2.1.0": (inDocument: any, effectData: any) => any;
    };
    function addFlags(inObjectUUID: any, inEffects: any): void;
    function removeFlags(inObjectUUID: any, inEffects: any, removeAll?: boolean): void;
    function _addFlags(inObjectUUID: any, inEffects: any): void;
    function _removeFlags(inObjectUUID: any, inEffects: any, removeAll?: boolean): void;
    const updateFlags: any;
}
