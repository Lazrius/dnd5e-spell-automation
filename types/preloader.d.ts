declare namespace Sequencer.Preloader {
	const _usersToRespond: Set<any>;
	const _clientsDone: any[];
	function _resolve(): void;
	/**
	 *  Caches provided file(s) locally, vastly improving loading speed of those files.
	 *
	 * @param {Array|String}        inSrcs
	 * @param {Boolean}             showProgressBar
	 * @returns {Promise<void>}
	 */
	function preload(inSrcs: string | any[], showProgressBar?: boolean): Promise<void>;
	/**
	 *  Caches provided file(s) locally, vastly improving loading speed of those files.
	 *
	 * @param {Array|String}        inSrcs
	 * @param {Boolean}             showProgressBar
	 * @returns {Promise<void>}
	 */
	function preload(inSrcs: string | any[], showProgressBar?: boolean): Promise<void>;
	/**
	 *  Causes each connected client (including the caller) to fetch and cache the provided file(s) locally, vastly
	 *  improving loading speed of those files.
	 *
	 * @param {Array|String}        inSrcs
	 * @param {Boolean}             showProgressBar
	 * @returns {Promise<void>}
	 */
	function preloadForClients(inSrcs: string | any[], showProgressBar?: boolean): Promise<void>;
	/**
	 *  Causes each connected client (including the caller) to fetch and cache the provided file(s) locally, vastly
	 *  improving loading speed of those files.
	 *
	 * @param {Array|String}        inSrcs
	 * @param {Boolean}             showProgressBar
	 * @returns {Promise<void>}
	 */
	function preloadForClients(inSrcs: string | any[], showProgressBar?: boolean): Promise<void>;
	function respond(inSenderId: any, inSrcs: any, showProgressBar: any): Promise<any>;
	function respond(inSenderId: any, inSrcs: any, showProgressBar: any): Promise<any>;
	function handleResponse(inUserId: any, numFilesFailedToLoad: any): void;
	function handleResponse(inUserId: any, numFilesFailedToLoad: any): void;
	/**
	 * Filters and cleans up file paths given to the preload methods
	 *
	 * @private
	 */
	function _cleanSrcs(inSrcs: any): any;
	/**
	 * Filters and cleans up file paths given to the preload methods
	 *
	 * @private
	 */
	function _cleanSrcs(inSrcs: any): any;
	/**
	 * The method that actually preloads files locally, with an optional progress bar
	 *
	 * @private
	 */
	function _preloadLocal(inSrcs: any, showProgressBar: any): Promise<any>;
	/**
	 * The method that actually preloads files locally, with an optional progress bar
	 *
	 * @private
	 */
	function _preloadLocal(inSrcs: any, showProgressBar: any): Promise<any>;
}
//# sourceMappingURL=sequencer-preloader.d.ts.map
