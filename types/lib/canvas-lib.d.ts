declare function calculate_missed_position(source: any, target: any, twister: any): {
    x: number;
    y: number;
};
declare function get_object_position(obj: any, { measure, exact }?: {
    measure?: boolean;
    exact?: boolean;
}): false | {
    x: any;
    y: any;
};
declare function get_random_offset(target: any, randomOffset: any, twister?: boolean): {
    x: number;
    y: number;
};
declare function get_object_dimensions(inObj: any, half?: boolean): {
    width: number;
    height: number;
};
declare function align({ context, spriteWidth, spriteHeight, align, edge }?: {
    context: any;
    spriteWidth: any;
    spriteHeight: any;
    align: any;
    edge: any;
}): {
    x: number;
    y: number;
};
declare function is_object_canvas_data(inObj: any): boolean;
declare function get_object_canvas_data(inObject: any, measure?: boolean): {
    width: number;
    height: number;
    x?: any;
    y?: any;
};
declare function get_mouse_position(snapToGrid?: boolean, gridSnap?: number): any;
declare function distance_between(p1: any, p2: any): any;
/**
 * Whether the current video is playing or not
 *
 * @returns {boolean}
 */
declare function is_video_playing(video: any): boolean;
/**
 * Determines whether a position is within the bounds of this effect
 *
 * @param inPosition
 * @param inElement
 * @param relativeTo
 * @returns {boolean}
 */
declare function is_position_within_bounds(inPosition: any, inElement: any, relativeTo: any): boolean;
declare function rotate_coordinate(p1: any, p2: any, radians: any): any[];
/**
 * Gets the closest token to a certain position
 *
 * @param inPosition
 * @param minimumDistance
 * @returns {*|boolean}
 */
declare function get_closest_token(inPosition: any, { minimumDistance }?: {
    minimumDistance?: boolean;
}): any | boolean;
declare function getBezierControlPoints(factor: any, previous: any, point: any, next: any): {
    cp1: {
        x: number;
        y: number;
    };
    next_cp0: {
        x: any;
        y: any;
    };
};
declare function rotateAroundPoint(cx: any, cy: any, x: any, y: any, angle: any): {
    x: any;
    y: any;
};
declare const alignments: {
    "top-left": {
        x: number;
        y: number;
    };
    top: {
        x: number;
        y: number;
    };
    "top-right": {
        x: number;
        y: number;
    };
    left: {
        x: number;
        y: number;
    };
    center: {
        x: number;
        y: number;
    };
    right: {
        x: number;
        y: number;
    };
    "bottom-left": {
        x: number;
        y: number;
    };
    bottom: {
        x: number;
        y: number;
    };
    "bottom-right": {
        x: number;
        y: number;
    };
};
