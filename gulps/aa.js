import gulp from 'gulp';
import through2 from 'through2';
import fs from 'fs';

import autorecWeapons from './defaults/autorec-weapons.js';

const autoRecognition = {
	"version": 4,
	"search": "",
	"melee": {},
	"range": {},
	"static": {},
	"templates": {},
	"auras": {},
	"preset": {},
	"aefx": {}
};

const defaultEffect = (name) => ({
	"name": name,
	"below": false,
	"hidden": true,
	"soundOnly": {
		"enable": false
	},
	"macro": {
		"enable": true,
		"playWhen": "2",
		"name": `Compendium.dnd5e-spell-automation.Macros.${name}`,
		"args": ""
	},
	"audio": {
		"a01": {
			"enable": false
		}
	},
	"animation": "",
	"variant": "",
	"color": "",
	"custom": false,
});

const createAefx = (metadata) => {
	const index = Object.keys(autoRecognition['range']).length;

	autoRecognition['aefx'][index.toString()] = {
		...defaultEffect(metadata.name),
		"aeType": "",
		"type": "source",
		"menuType": "",
	};
};

const createRange = (metadata) => {
	const index = Object.keys(autoRecognition['range']).length;

	autoRecognition['range'][index.toString()] = {
		...defaultEffect(metadata.name),
		"anim2d": false,
		"menuType": "spell",
		"repeat": null,
		"delay": null,
		"explosion": {
			"enable": false
		}
	};
};

const createTemplate = (metadata) => {
	const index = Object.keys(autoRecognition['templates']).length;

	autoRecognition['templates'][index.toString()] = {
		...defaultEffect(metadata.name),
		"menuType": "",
		"animation": "",
		"variant": "",
		"color": "",
		"custom": false,
		"repeat": null,
		"delay": null,
		"scaleX": null,
		"scaleY": null,
		"opacity": null,
		"removeTemplate": false,
		"persist": false
	};
};

const createEntry = (file, enc, cb) => {
	const contents = file.contents.toString();

	const index = contents.toString().indexOf('@endmeta');
	const js = contents.toString().substring(0, index + 8);
	if (index === -1 || !js.includes('@endmeta')) {
		console.warn('metadata not found. Path: ' + file.path);
		cb(null);
		return;
	}

	const metadata = eval(js);

	switch (metadata.spellType) {
		case 'melee':
		{
			break;
		}
		case 'range':
		{
			createRange(metadata);
			break;
		}
		case 'static':
		{
			break;
		}
		case 'templates':
		{
			createTemplate(metadata);
			break;
		}
		case 'auras':
		{
			break;
		}
		case 'preset':
		{
			break;
		}
		case 'aefx':
		{
			createAefx(metadata);
			break;
		}
		default:
			console.warn('Spell type unknown. Not adding to autorec.json. Path: ' + file.path);
			cb(null);
			return;
	}

	cb(null);
};

// Merge our generated AA with the defaults we import
const combine = () => {
	// Loop over all our categories
	for (const key in autorecWeapons) {
		// Get each item within the category
		for (const item in autorecWeapons[key]) {
			// Count the amount of items in the matching category
			const index = Object.keys(autoRecognition[key]).length;
			// Add a new item to the category from the default list
			autoRecognition[key][index.toString()] = autorecWeapons[key][item];
		}
	}
};

const finished = (cb) => {
	combine();

	const json = 'autorec.json';
	fs.rmSync(json, { force: true });
	const db = fs.createWriteStream(json, { flags: "a", mode: 0o664 });
	db.write(JSON.stringify(autoRecognition, null, 4));
	db.close();

	cb();
};

export const aa = () => {
	return gulp.src('Macros/**/*.js')
		.pipe(through2.obj(createEntry, finished, undefined));
};