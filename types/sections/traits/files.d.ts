declare interface FileTrait {
    _file: string;
    _fileOptions: boolean;
    _baseFolder: string;
    _mustache: any;
    _silentlyFail: boolean;
    /**
     * declares which file to be played. This may also be an array of paths, which will be randomly picked from each
     * time the section is played.
     *
     * @param {string|array} inFile
     * @param {boolean} silentlyFail
     * @returns this
     */
    file(inFile: string | any[], silentlyFail?: boolean): this;
    /**
     * declares which file to be played. This may also be an array of paths, which will be randomly picked from each
     * time the section is played.
     *
     * @param {string|array} inFile
     * @param {boolean} silentlyFail
     * @returns this
     */
    file(inFile: string | any[], silentlyFail?: boolean): this;
    /**
     * Defines the base folder that will prepend to the file path. This is mainly just useful to make the file
     * path easier to manage.
     *
     * @param {string} inBaseFolder
     * @returns this
     */
    baseFolder(inBaseFolder: string): this;
    /**
     * Sets the Mustache of the filepath. This is applied after the randomization of the filepath, if available.
     *
     * @param {object} inMustache
     * @returns this
     */
    setMustache(inMustache: any): this;
    /**
     * Sets the Mustache of the filepath. This is applied after the randomization of the filepath, if available.
     *
     * @param {object} inMustache
     * @returns this
     */
    setMustache(inMustache: any): this;
    _determineFile(inFile: any): Promise<{
        file: any;
        forcedIndex: number | boolean;
        customRange: boolean;
    }>;
    _determineFile(inFile: any): Promise<{
        file: any;
        forcedIndex: number | boolean;
        customRange: boolean;
    }>;
    _processFile(inFile: any): Promise<any>;
    _processFile(inFile: any): Promise<any>;
    _validateCustomRange(inFile: any): Promise<{
        file: Record<string, unknown>;
        forcedIndex: boolean;
        customRange: boolean;
    }>;
    _validateCustomRange(inFile: any): Promise<{
        file: Record<string, unknown>;
        forcedIndex: boolean;
        customRange: boolean;
    }>;
    _determineDatabaseFile(inFile: any): {
        file: any;
        forcedIndex: number | boolean;
        customRange: boolean;
    };
    _determineDatabaseFile(inFile: any): {
        file: any;
        forcedIndex: number | boolean;
        customRange: boolean;
    };
    _applyBaseFolder(inFile: any): any;
    _applyBaseFolder(inFile: any): any;
    _applyMustache(inFile: any): any;
    _applyMustache(inFile: any): any;
    _applyWildcard(inFile: any): any;
    _applyWildcard(inFile: any): any;
}

