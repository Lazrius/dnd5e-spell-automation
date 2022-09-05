import { randomID } from './_utils.js';

// Generate 10 foundry ids
export const generateIds = (cb) => {
	for (let i = 0; i < 10; i++) {
		console.log(randomID());
	}

	cb();
};