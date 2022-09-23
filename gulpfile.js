import { packFile } from './gulps/pack.js';
import { generateIds } from './gulps/generateIds.js';
import { aa } from './gulps/aa.js';
import { update } from './gulps/update.js';

export const packDbg = () => {
	process.env.DEBUG = true;
	return packFile();
};

export const pack = packFile;
export const ids = generateIds;
export const autorec = aa;
export const publish = update;