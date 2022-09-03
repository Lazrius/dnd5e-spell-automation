interface IEffectSection extends Section, FileTrait, OpacityTrait, AudioTrait, MoveTrait, TimeTrait, RotationTrait,
    FilterTrait, TintTrait, AnimationTrait, UserTrait, ScaleTrait {}
declare class EffectSection extends IEffectSection {
	constructor(inSequence: any, inFile?: string);
    _waitUntilFinished: any;
    _file: string;
    _text: any;
    _source: any;
    _stretchTo: {
        target: any;
        attachTo: any;
        onlyX: any;
    };
    _attachTo: {
        active: boolean;
        align: any;
        edge: any;
        bindVisibility: any;
        bindAlpha: any;
        followRotation: any;
    };
    _from: {
        object: any;
        options: any;
    };
    _origin: string;
    _anchor: any;
    _spriteAnchor: any;
    _randomOffset: any;
    _missed: boolean;
    _private: boolean;
    _randomMirrorX: boolean;
    _randomMirrorY: boolean;
    _mirrorX: boolean;
    _mirrorY: boolean;
    _playbackRate: number;
    _template: Record<string, unknown>;
    _overrides: any[];
    _name: any;
    _layer: number;
    _zIndex: number;
    _offset: any;
    _spriteOffset: any;
    _size: any;
    _persist: boolean;
    _persistOptions: any;
    _zeroSpriteRotation: boolean;
    _extraEndDuration: number;
    _noLoop: boolean;
    _tilingTexture: {
        scale: any;
        position: any;
    };
    _snapToGrid: boolean;
    _scaleToObject: any;
    _screenSpace: boolean;
    _screenSpaceAboveUI: boolean;
    _screenSpaceAnchor: any;
    _screenSpacePosition: any;
    _screenSpaceScale: any;
    _masks: any[];
    _tiedDocuments: any[];
    _selfMask: boolean;
    _temporaryEffect: boolean;
    _spriteRotation: number;
    _isRangedEffect: any;
    _offsetLegacy: any;
    _randomOffsetLegacy: number;
    _spriteScaleMin: number;
    _spriteScaleMax: number | boolean;
    /**
     * Causes the effect's position to be stored and can then be used  with .atLocation(), .stretchTowards(),
     * and .rotateTowards() to refer to previous effects' locations
     *
     * @param {String} inName
     * @returns {EffectSection}
     */
    name(inName: string): EffectSection;
    /**
     * Causes the effect to persist indefinitely on the canvas until _ended via SequencerEffectManager.endAllEffects() or
     * name the effect with .name() and then end it through SequencerEffectManager.endEffect()
     *
     * @param {Boolean} [inBool=true] inBool
     * @param {Object} [inOptions={}] inOptions
     * @returns {EffectSection}
     */
    persist(inBool?: boolean, inOptions?: any): EffectSection;
    /**
     * Sets the effect's playback rate. A playback rate of 2.0 would make it play 2x as fast, 0.5 would make
     * it play half as fast.
     *
     * @param {Number} inNumber
     * @returns {EffectSection}
     */
    playbackRate(inNumber?: number): EffectSection;
    /**
     * Causes the effect to target a location close to the .stretchTowards() location, but not on it.
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    missed(inBool?: boolean): EffectSection;
    /**
     * Adds a function that will run at the end of the effect serialization step, but before it is played. Allows direct
     * modifications of effect's data. For example, it could be manipulated to change which file will be used based
     * on the distance to the target.
     *
     * @param {Function} inFunc
     * @returns {EffectSection}
     */
    addOverride(inFunc: () => void): EffectSection;
    /**
     * Adds a function that will run at the end of the effect serialization step, but before it is played. Allows direct
     * modifications of effect's data. For example, it could be manipulated to change which file will be used based
     * on the distance to the target.
     *
     * @param {Function} inFunc
     * @returns {EffectSection}
     */
    addPostOverride(inFunc: () => void): EffectSection;
    /**
     *  A smart method that can take a reference to an object, or a direct on the canvas to play the effect at,
     *  or a string reference (see .name())
     *
     * @param {Object|String} inLocation
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    atLocation(inLocation: Token | PIXI.ObservablePoint | string | { x: number, y: number }, inOptions?: any): EffectSection;
    /**
     *  A smart method that can take a reference to an object, or a direct on the canvas to play the effect at,
     *  or a string reference (see .name())
     *
     * @param {Object|String} inObject
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    attachTo(inObject: Token | string, inOptions?: any): EffectSection;
    /**
     *  DEPRECATED IN FAVOR OF .stretchTo()
     *
     * @param {Object|String} inLocation
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    reachTowards(inLocation: Token | PIXI.ObservablePoint | string | { x: number, y: number }, inOptions?: any): EffectSection;
    /**
     *  Causes the effect to be rotated and stretched towards an object, or a direct on the canvas to play the effect at, or a string reference (see .name())
     *  This effectively calculates the proper X scale for the effect to reach the target
     *
     * @param {Object|String} inLocation
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    stretchTo(inLocation: Token | PIXI.ObservablePoint | string | { x: number, y: number }, inOptions?: any): EffectSection;
    /**
     * Sets the location to rotate the object to
     *
     * @param {object|string} inLocation
     * @param {object} inOptions
     * @returns this
     */
    rotateTowards(inLocation: Token | PIXI.ObservablePoint | string | { x: number, y: number }, inOptions?: Record<string, unknown>): EffectSection;
    _rotateTowards: {
        target: any;
        rotationOffset: any;
        cacheLocation: any;
        attachTo: any;
    };
    /**
     *  Create an effect based on the given object, effectively copying the object as an effect. Useful when you want to do some effect magic on tokens or tiles.
     *
     * @param {Object} inObject
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    from(inObject: Token | string, inOptions?: any): EffectSection;
    /**
     *  Creates a text element, attached to the sprite. The options for the text are available here:
     *  https://pixijs.io/pixi-text-style/
     *
     * @param {String} inText
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    text(inText: string, inOptions?: any): EffectSection;
    _validateOffset(functionName: any, inOffset: any, inOptions?: Record<string, unknown>): any;
    /**
     *  Causes the effect to be offset relative to its location based on a given vector
     *
     * @param {Object} inOffset
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    offset(inOffset: any, inOptions?: any): EffectSection;
    /**
     *  Causes the effect's sprite to be offset relative to its location based on a given vector
     *
     * @param {Object} inOffset
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    spriteOffset(inOffset: any, inOptions?: any): EffectSection;
    /**
     * Causes the final effect location to be snapped to the grid
     *
     * @param {Boolean} inBool
     * @returns {EffectSection}
     */
    snapToGrid(inBool?: boolean): EffectSection;
    /**
     * Causes the effect to be scaled to the target object's width
     *
     * @param {Number} inScale
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    scaleToObject(inScale?: number, inOptions?: any): EffectSection;
    /**
     * Sets the width and the height of the effect in pixels, this size is set before any scaling
     *
     * @param {Number|Object<{width: {Number}, height: {Number}}>} inSize
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    size(inSize: number | any, inOptions?: any): EffectSection;
    /**
     *  This scales the sprite of the effect, and this method can take the following:
     *  - A number to set the scale uniformly
     *  - An object with x and y for non-uniform scaling
     *  - Two numbers which the Sequencer will randomly pick a uniform scale between
     *
     * @param {number|object} inScaleMin
     * @param {number} [inScaleMax] inScaleMax
     * @returns this
     */
    spriteScale(inScaleMin: number | Record<string, unknown>, inScaleMax?: number): EffectSection;
    /**
     * Sets the grid size of the file loaded in the Effect. Some files have an established internal
     * grid, so this will make the effect scale up or down to match the active scene's grid size
     *
     * @param {Number} inGridSize
     * @returns {EffectSection}
     */
    gridSize(inGridSize: number): EffectSection;
    /**
     *  Defines the start point within the given sprite, starting from the left of the sprite. An example
     *  would be a given number of `200` - means that the sprite will consider 200 pixels into the sprite as the
     *  'anchor point'
     *
     * @param {Number} inStartPoint
     * @returns {EffectSection}
     */
    startPoint(inStartPoint: number): EffectSection;
    /**
     *  The same as the start point, except from the right and how many pixels to offset the target from
     *
     * @param {Number} inEndPoint
     * @returns {EffectSection}
     */
    endPoint(inEndPoint: number): EffectSection;
    /**
     * This defines the internal padding of this effect. Gridsize determines the internal grid size of this effect which will determine how big it is on the canvas
     * relative to the canvas's grid size. Start and end point defines padding at the left and right of the effect
     *
     * @param {Number} gridSize
     * @param {Number} startPoint
     * @param {Number} endPoint
     * @returns {EffectSection}
     */
    template({ gridSize, startPoint, endPoint }?: number): EffectSection;
    /**
     * This makes the texture of the effect tile, effectively repeat itself within the sprite's dimensions
     *
     * @param {Object|Number} scale
     * @param {Object} position
     * @returns {EffectSection}
     */
    tilingTexture(scale?: any | number, position?: any): EffectSection;
    /**
     *  Anchors the sprite's container according to the given x and y coordinates, or uniformly based on a single number
     *
     * @param {Number|Object} inAnchor
     * @returns {EffectSection}
     */
    anchor(inAnchor: number | any): EffectSection;
    /**
     *  Anchors the sprite according to the given x and y coordinates, or uniformly based on a single number
     *
     * @param {Number|Object} inAnchor
     * @returns {EffectSection}
     */
    spriteAnchor(inAnchor: number | any): EffectSection;
    /**
     *  Centers the sprite, effectively giving it an anchor of {x: 0.5, y: 0.5}
     *
     *  Note: If this is used, it will override the anchor set by Aim Towards, which sets the sprite's anchor to the
     *  outermost edge of the location the sprite is played at
     *
     * @returns {EffectSection}
     */
    center(): EffectSection;
    /**
     * The sprite gets a random offset on its target location, usually within the object's bounds. The optional parameter
     * scales how much offset should be added. Defaults to 1.0, which covers the entire target position, 0.5 would cover half.
     *
     * @param {Number} inOffsetScale
     * @returns {EffectSection}
     */
    randomOffset(inOffsetScale?: number): EffectSection;
    /**
     * The sprite gets a randomized flipped X scale. If the scale on that axis was 1, it can
     * become 1 or -1, effectively mirroring the sprite on its horizontal axis
     *
     * @param {Boolean} inBool
     * @returns {EffectSection}
     */
    randomizeMirrorX(inBool?: boolean): EffectSection;
    /**
     * The sprite gets a randomized flipped Y scale. If the scale on that axis was 1, it can
     * become 1 or -1, effectively mirroring the sprite on its vertical axis
     *
     * @param {Boolean} inBool
     * @returns {EffectSection}
     */
    randomizeMirrorY(inBool?: boolean): EffectSection;
    /**
     * The sprite gets a flipped X scale. If the scale on that axis was 1, it will become become 1 or -1, effectively
     * mirroring the sprite on its horizontal axis
     *
     * @param {Boolean} inBool
     * @returns {EffectSection}
     */
    mirrorX(inBool?: boolean): EffectSection;
    /**
     * The sprite gets a flipped Y scale. If the scale on that axis was 1, it will become become 1 or -1, effectively
     * mirroring the sprite on its vertical axis
     *
     * @param {Boolean} inBool
     * @returns {EffectSection}
     */
    mirrorY(inBool?: boolean): EffectSection;
    /**
     * Causes the effect to be played below tokens
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    belowTokens(inBool?: boolean): EffectSection;
    /**
     * Causes the effect to be played below tiles
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    belowTiles(inBool?: boolean): EffectSection;
    /**
     * Causes the effect to be played above the lighting layer, which makes the effect be visible over almost everything except weather effects
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    aboveLighting(inBool?: boolean): EffectSection;
    /**
     * Sets the zIndex of the effect, potentially displaying it on top of other effects
     *
     * @param {Number} inZIndex
     * @returns {EffectSection}
     */
    zIndex(inZIndex: number): EffectSection;
    /**
     * Sets the zIndex of the effect, potentially displaying it on top of other effects
     *
     * @param {Number} inExtraDuration
     * @returns {EffectSection}
     */
    extraEndDuration(inExtraDuration: number): EffectSection;
    /**
     *
     * @param {Number} inAngle
     * @returns {EffectSection}
     */
    spriteRotation(inAngle: number): EffectSection;
    /**
     * Causes the effect to not rotate should its container rotate
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    zeroSpriteRotation(inBool?: boolean): EffectSection;
    /**
     * If the effect would loop due to its duration or persistence, this causes it not to
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    noLoop(inBool?: boolean): EffectSection;
    /**
     * Causes the effect to not show up in the Effect Manager UI - DO NOT USE UNLESS YOU KNOW WHAT YOU ARE DOING
     *
     * @param inBool
     * @returns {EffectSection}
     */
    private(inBool?: boolean): EffectSection;
    /**
     * Causes the effect to be played in screen space instead of world space (where tokens are)
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    screenSpace(inBool?: boolean): EffectSection;
    /**
     * Causes the effect to be played above all of the UI elements
     *
     * @param {Boolean} [inBool=true] inBool
     * @returns {EffectSection}
     */
    screenSpaceAboveUI(inBool?: boolean): EffectSection;
    /**
     *  Positions the effect in a screen space position, offset from its .screenSpaceAnchor()
     *
     * @param {Object} inPosition
     * @returns {EffectSection}
     */
    screenSpacePosition(inPosition: any): EffectSection;
    /**
     *  Anchors the sprite according to the given x and y coordinates, or uniformly based on a single number in screen space
     *
     * @param {Number|Object} inAnchor
     * @returns {EffectSection}
     */
    screenSpaceAnchor(inAnchor: number | any): EffectSection;
    /**
     *  Sets up various properties relating to scale of the effect on the screen
     *
     * @param {Object} inOptions
     * @returns {EffectSection}
     */
    screenSpaceScale(inOptions: any): EffectSection;
    /**
     *  This is for adding extra information to an effect, like the origin of the effect in the form of the item's uuid.
     *  The method accepts a string or a Document that has an UUID.
     *
     * @param {string|document} inOrigin
     * @returns {Section}
     */
    origin(inOrigin: string | Document): Section;
    /**
     * Ties the effect to any number of documents in Foundry - if those get deleted, the effect is ended.
     *
     * @param {String|PlaceableObject|foundry.abstract.Document|Array<String|PlaceableObject|foundry.abstract.Document>} inDocuments
     * @returns {EffectSection}
     */
    tieToDocuments(inDocuments: string | PlaceableObject | foundry.abstract.Document | Array<string | PlaceableObject | foundry.abstract.Document>): EffectSection;
    /**
     *  Masks the effect to the given object or objects. If no object is given, the effect will be masked to the source
     *  of the effect.
     *
     * @param {Token/TokenDocument/Tile/TileDocument/Drawing/DrawingDocument/MeasuredTemplate/MeasuredTemplateDocument/Array} inObject
     * @returns {Section}
     */
    mask(inObject: any): Section;
    /**
     * Causes the effect to be visible through walls
     *
     * @param inBool
     * @returns {EffectSection}
     */
    xray(inBool?: boolean): EffectSection;
    _xray: boolean;
    /**
     * @private
     */
    private _expressWarnings;
    _angle: number;
    /**
     * @private
     */
    private _sanitizeObject;
    /**
     * @private
     */
    private _getSourceObject;
    /**
     * @private
     */
    private _getTargetObject;
    /**
     * @private
     */
    private get _target();
    /**
     * @private
     */
    private _sanitizeEffectData;
    /**
     * @private
     */
    private _getCalculatedScale;
}

