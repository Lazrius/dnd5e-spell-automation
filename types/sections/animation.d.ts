declare interface IAnimationSection extends Section, MoveTrait, OpacityTrait, RotationTrait, AudioTrait, TintTrait {}
declare class AnimationSection extends IAnimationSection {
	constructor(inSequence: any, inTarget: any);
    _teleportTo: boolean;
    _originObject: boolean;
    _moveSpeed: number;
    _offset: {
        x: number;a
        y: number;
    };
    _closestSquare: boolean;
    _snapToGrid: boolean;
    _hide: boolean;
    /**
     * Sets the target object to be animated
     *
     * @param {object|string} inTarget
     * @returns {AnimationSection}
     */
    on(inTarget: object | string): AnimationSection;
    /**
     * Sets the location to teleport the target object to
     *
     * @param {object|string} inTarget
     * @param {object} options
     * @returns {AnimationSection}
     */
    teleportTo(inTarget: object | string, options?: object): AnimationSection;
    /**
     * Sets the location to rotate the object to
     *
     * @param {object|string} inLocation
     * @param {object} options
     * @returns this
     */
    rotateTowards(inLocation: object | string, options?: object): AnimationSection;
    _rotateTowards: any;
    /**
     * Causes the movement or teleportation to be offset in the X and/or Y axis
     *
     * @param {object} inOffset
     * @returns {AnimationSection}
     */
    offset(inOffset: object): AnimationSection;
    /**
     * Causes the movement or teleportation to pick the closest non-intersecting square, if the target is a token or tile
     *
     * @param {boolean} inBool
     * @returns {AnimationSection}
     */
    closestSquare(inBool?: boolean): AnimationSection;
    /**
     * Causes the final location to be snapped to the grid
     *
     * @param {boolean} inBool
     * @returns {AnimationSection}
     */
    snapToGrid(inBool?: boolean): AnimationSection;
    /**
     * Causes the object to become hidden
     *
     * @param {boolean} inBool
     * @returns {AnimationSection}
     */
    hide(inBool?: boolean): AnimationSection;
    /**
     * Causes the object to become visible
     *
     * @param {boolean} inBool
     * @returns {AnimationSection}
     */
    show(inBool?: boolean): AnimationSection;
    /**
     * @private
     */
    private run;
    /**
     * @private
     */
    private _updateObject;
    /**
     * @private
     */
    private _getClosestSquare;
    /**
     * @private
     */
    private _getCleanPosition;
    /**
     * @private
     */
    private _snapLocationToGrid;
    /**
     * This needs a rewrite, jeesus.
     */
    _runAnimate(): Promise<any>;
    /**
     * @private
     */
    private _animate;
}

