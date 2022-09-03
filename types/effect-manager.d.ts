declare namespace Sequencer {
    declare class EffectManager {
        static _updatePosition(uuid: any, position: any): void;

        static getPositionForUUID(uuid: any): any;

        /**
         * Returns all of the currently running effects on the canvas
         *
         * @returns {Array}
         */
        static get effects(): any[];

        /**
         * Opens the Sequencer Effects UI with the effects tab open
         *
         * @returns {SequencerEffectsUI}
         */
        static show(): SequencerEffectsUI;

        /**
         * Play an effect on the canvas.
         *
         * @param {object} data The data that describes the audio to play
         * @param {boolean} [push=true] A flag indicating whether or not to make other clients play the effect
         * @returns {CanvasEffect} A CanvasEffect object
         */
        static play(data: object, push?: boolean): CanvasEffect;

        /**
         * Get effects that are playing on the canvas based on a set of filters
         *
         * @param {object} inFilter An object containing filters that determine which effects to return
         *                             - object: An ID or a PlaceableObject
         *                             - name: The name of the effect
         *                             - sceneId: the ID of the scene to search within
         *                             - effects: a single CanvasEffect or its ID, or an array of such
         * @returns {Array} An array containing effects that match the given filter
         */
        static getEffects(inFilter?: object): any[];

        /**
         * Updates effects based on a set of filters
         *
         * @param {object} inFilter An object containing filters that determine which effects to return
         *                             - object: An ID or a PlaceableObject
         *                             - name: The name of the effect
         *                             - sceneId: the ID of the scene to search within
         *                             - effects: a single CanvasEffect or its ID, or an array of such
         * @param {object} inUpdates
         * @returns {promise}
         */
        static updateEffects(inFilter: object, inUpdates: object): Promise<any>;

        /**
         * End effects that are playing on the canvas based on a set of filters
         *
         * @param {object} inFilter An object containing filters that determine which effects to end
         *                             - object: An ID or a PlaceableObject
         *                             - name: The name of the effect
         *                             - sceneId: the ID of the scene to search within
         *                             - effects: a single CanvasEffect or its ID, or an array of such
         * @param {boolean} [push=true] A flag indicating whether or not to make other clients end the effects
         * @returns {promise} A promise that resolves when the effects have _ended
         */
        static endEffects(inFilter?: object, push?: boolean): Promise<any>;

        /**
         * End all effects that are playing on the canvas
         *
         * @param {string} [inSceneId] A parameter which determines which scene to end all effects on, defaults to current viewed scene
         * @param {boolean} [push=true] A flag indicating whether or not to make other clients end all effects
         * @returns {promise} A promise that resolves when all of the effects have _ended
         */
        static endAllEffects(inSceneId?: string, push?: boolean): Promise<any>;

        /**
         * If an effect has been named its position will be cached, which can be retrieved with this method
         *
         * @param {string} inName
         * @returns {object|boolean}
         * @private
         */
        private static getEffectPositionByName;
        /**
         * Filters the existing effects based on the given filter
         *
         * @param inFilter
         * @returns {array}
         * @private
         */
        private static _filterEffects;
        /**
         * Validates an object actually exists, and gets its UUID
         *
         * @param object
         * @param sceneId
         * @returns {string}
         * @private
         */
        private static _validateObject;
        /**
         * Validates the filter given to any of the above public methods
         *
         * @param inFilter
         * @returns {boolean}
         * @private
         */
        private static _validateFilters;
        /**
         * Actually plays the effect on the canvas
         *
         * @param data
         * @param setFlags
         * @returns {Promise<{duration: Promise<number>, promise: Promise<void>}>}
         * @private
         */
        private static _playEffect;
        /**
         * Updates a single effect with the given data
         *
         * @param inEffectId
         * @param inUpdates
         * @returns {promise|boolean}
         * @private
         */
        private static _updateEffect;

        /**
         * Sets up persisting effects when the scene is first loaded
         *
         * @returns {promise}
         */
        static setUpPersists(): Promise<any>;

        /**
         * Tears down persisting effects when the scene is unloaded
         */
        static tearDownPersists(): Promise<PromiseSettledResult<any>[]>;

        /**
         * Handles the deletion of objects that effects are attached to
         *
         * @param inUUID
         * @returns {Promise}
         */
        static objectDeleted(inUUID: any): Promise<any>;

        /**
         * Patches an object's creation data before it's created so that the effect plays on it correctly
         *
         * @param inDocument
         * @param data
         * @param options
         * @returns {*}
         */
        static patchCreationData(inDocument: any, data: any, options: any): any;

        /**
         * Plays the effects of a given document on creation
         *
         * @param inDocument
         * @returns {*}
         */
        static documentCreated(inDocument: any): any;

        /**
         * Plays multiple effects at the same time
         *
         * @param inEffects
         * @param inDocument
         * @returns {Promise<{duration: Promise<number>, promise: Promise<void>}[]>}
         * @private
         */
        private static _playEffectMap;
        /**
         * Ends multiple effects by ID
         *
         * @param inEffectIds
         * @returns {Promise<boolean|any>}
         * @private
         */
        private static _endEffects;
        /**
         * Ends one or many effects at the same time, returning a promise that resolves once every effect has fully _ended
         *
         * @param inEffects
         * @returns {Promise}
         * @private
         */
        private static _endManyEffects;
        /**
         * Removes the effect from the manager and ends it, returning a promise that resolves once the effect has fully _ended
         *
         * @param effect
         * @returns {promise}
         * @private
         */
        private static _removeEffect;

        static _playPrototypeTokenEffects(data: any, push: any): Promise<void>;
    }
}
