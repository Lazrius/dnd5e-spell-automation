import gulp from 'gulp';
import through2 from 'through2';
import fs from 'fs';

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

const createRange = (metadata) => {
	const index = Object.keys(autoRecognition['range']).length;

	autoRecognition['range'][index.toString()] = {
		"below": false,
		"hidden": true,
		"anim2d": false,
		"name": metadata.name,
		"soundOnly": {
			"enable": false
		},
		"macro": {
			"enable": true,
			"playWhen": "2",
			"name": `Compendium.dnd5e-spell-automation.Macros.${metadata.name}`,
			"args": ""
		},
		"menuType": "spell",
		"animation": "",
		"variant": "",
		"color": "",
		"custom": false,
		"repeat": null,
		"delay": null,
		"audio": {
			"a01": {
				"enable": false
			}
		},
		"explosion": {
			"enable": false
		}
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
			break;
		}
		default:
			console.warn('Spell type unknown. Not adding to autorec.json. Path: ' + file.path);
			cb(null);
			return;
	}

	cb(null);
};

const finished = (cb) => {
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