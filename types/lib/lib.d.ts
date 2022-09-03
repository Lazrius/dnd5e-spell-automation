/**
 *  This function is a backwards compatible method for both 0.8.9 and 9.224 that returns a boolean whether
 *  you're on version 8 or 9
 *
 * @return {boolean}                    If the user is on version 9
 */
declare function isVersion9(): boolean;
/**
 *  This function linearly interpolates between p1 and p2 based on a normalized value of t
 *
 * @param  {string}         inFile      The start value
 * @param  {object}         inOptions   The end value
 * @return {array|boolean}              Interpolated value
 */
declare function getFiles(inFile: string, { applyWildCard, softFail }?: object): any[] | boolean;
/**
 *  This function interpolates between p1 and p2 based on a normalized value of t, determined by the ease provided (string or function)
 *
 * @param  {number}             p1      The start value
 * @param  {number}             p2      The end value
 * @param  {number}             t       The normalized percentage
 * @param  {string|function}    ease    Type of ease to interpolate
 * @return {number}                     Interpolated value
 */
declare function interpolate(p1: number, p2: number, t: number, ease?: string | Function): number;
/**
 *  Returns a floating point number between a minimum and maximum value
 *
 * @param  {number}     min                     The minimum value
 * @param  {number}     max                     The maximum value
 * @param  {boolean|MersenneTwister} twister    The twister to generate the random results from
 * @return {number}                             A random value between the range given
 */
declare function random_float_between(min: number, max: number, twister?: boolean | MersenneTwister): number;
/**
 *  Returns an integer between a minimum and maximum value
 *
 * @param  {number}     min                     The minimum value
 * @param  {number}     max                     The maximum value
 * @param  {boolean|MersenneTwister} twister    The twister to generate the random results from
 * @return {int}                                A random integer between the range given
 */
declare function random_int_between(min: number, max: number, twister?: boolean | MersenneTwister): int;
/**
 *  Returns a shuffled copy of the original array.
 *
 * @param  {array}   inArray
 * @param  {boolean|MersenneTwister} twister    The twister to generate the random results from
 * @return {array}
 */
declare function shuffle_array(inArray: any[], twister?: boolean | MersenneTwister): any[];
/**
 *  This function determines if the given parameter is a callable function
 *
 * @param  {function}   inFunc    The function object to be tested
 * @return {boolean}              A boolean whether the function is actually a function
 */
declare function is_function(inFunc: Function): boolean;
/**
 *  Returns a random element in the given array
 *
 * @param  {array}   inArray                    An array
 * @param  {boolean} recurse                    Whether to recurse if the randomly chosen element is also an array
 * @param  {boolean|MersenneTwister} twister    The twister to generate the random results from
 * @return {object}                             A random element from the array
 */
declare function random_array_element(inArray: any[], { recurse, twister }?: boolean): object;
/**
 *  Returns a random element in the given array
 *
 * @param  {object}   inObject                  An object
 * @param  {boolean}  recurse                   Whether to recurse if the randomly chosen element is also an object
 * @param  {boolean|MersenneTwister} twister    The twister to generate the random results from
 * @return {object}                             A random element from the object
 */
declare function random_object_element(inObject: object, { recurse, twister }?: boolean): object;
/**
 *  Tests a parameter whether it is a real number
 *
 * @param  {any}        inNumber    The parameter to test
 * @return {boolean}                Whether it is of type number, not infinite, and not NaN
 */
declare function is_real_number(inNumber: any): boolean;
/**
 *  Gets a property in an object based on a path in dot-notated string
 *
 * @param   {object}         obj       The object to be queried
 * @param   {array|string}   path      The path in the object to the property in a dot-notated string
 * @returns {any}                      Property value, if found
 */
declare function deep_get(obj: object, path: any[] | string): any;
/**
 *  Sets a property in an object based on a path in dot-notated string, example:
 *  let obj = { first: { second: { third: "value" } } }
 *  deep_set(obj, "newValue", "first.second.third")
 *  let obj = { first: { second: { third: "newValue" } } }
 *
 * @param  {object}         obj       The object to be modified
 * @param  {array|string}   path      The path in the object to the property in a dot-notated string
 * @param  {any}            value     The value to set
 */
declare function deep_set(obj: object, path: any[] | string, value: any): void;
/**
 *  Flattens an object in a dot-notated format, like:
 *  { data: { entry: { thing: "stuff" } } }
 *  Becomes:
 *  [{ "data.entry.thing": "stuff" }]
 *
 * @param  {object}     obj       The object to be flattened
 * @return {object}               The flattened object
 */
declare function flatten_object(obj: object): object;
/**
 *  Wait for a duration.
 *
 * @param  {number}     ms      Milliseconds to wait
 * @return {Promise}            A promise that resolves after a given amount of milliseconds
 */
declare function wait(ms: number): Promise<any>;
/**
 *  Clamps a value between two numbers
 *
 * @param  {number}     num     Number to clamp
 * @param  {number}     min     The minimum the number can be
 * @param  {number}     max     The maximum the number can be
 * @return {number}             The clamped number
 */
declare function clamp(num: number, min: number, max: number): number;
/**
 * Checks whether a given string is a valid UUID or not
 *
 * @param {string} inId
 * @returns {boolean}
 */
declare function is_UUID(inId: string): boolean;
/**
 *  Gets an object by an unique identifier, such as an ID, name, tag, label
 *
 * @param  {String}     inObjectId  The object identifier to search for
 * @param  {String}     inSceneId   The scene ID to search within
 * @return {any}                    Object if found, else undefined
 */
declare function get_object_from_scene(inObjectId: string, inSceneId?: string): any;
/**
 *  Retrieves an object from the scene using its UUID, avoiding compendiums as they would have to be async'd
 *
 * @param uuid
 * @returns {null}
 */
declare function from_uuid_fast(uuid: any): null;
/**
 * Gets all documents from the given scene
 *
 * @param inSceneId [inSceneId]
 * @returns {Array<Document>}
 */
declare function get_all_documents_from_scene(inSceneId: any): Array<Document>;
/**
 * Gets the document from an object, if it has one
 *
 * @param inObject
 * @returns {Document|{document}|*}
 */
declare function validate_document(inObject: any): any;
/**
 *  Get the unique identifier from an object
 *
 * @param  {Object}     inObject    The object to get the unique identifier from
 * @param  {Boolean}    tryUUID     The object to get the unique identifier from
 * @return {String}                 The identifier
 */
declare function get_object_identifier(inObject: any, tryUUID?: boolean): string;
/**
 *  Turns an array containing multiples of the same string, objects, etc, and removes duplications, and returns a fresh array
 *
 * @param  {Array}     inArray     An array of multiple duplicate collections to be made unique
 * @return {Array}                 An array containing only unique objects
 */
declare function make_array_unique(inArray: any[]): any[];
declare function debug(msg: any, args?: string): void;
declare function debug_error(msg: any, args: any): void;
declare function custom_warning(ininterfaceName: any, warning: any, notify?: boolean): void;
declare function custom_error(ininterfaceName: any, error: any, notify?: boolean): Error;
declare function user_can_do(inSetting: any): boolean;
declare function group_by(xs: any, key: any): any;
declare function sequence_proxy_wrap(inSequence: any): any;
declare function section_proxy_wrap(ininterface: any): any;
declare function str_to_search_regex_str(str: any): any;
declare function safe_str(str: any): any;
declare function scroll_to_element(scrollElement: any, scrollToElement: any, duration?: number): Promise<any>;
declare function highlight_element(element: any, { duration, color, size }?: {
    duration?: boolean;
    color?: string;
    size?: string;
}): Promise<void>;
declare function get_hash(input: any): number;
