import gulp from 'gulp';
import preprocess from 'gulp-preprocess';
import through2 from 'through2';
import * as fs from 'fs';
import { basename, resolve } from 'path';

const packName = "jb2a-dnd5e-macros.db";

const newMacros = [];

const macroToJson = async (file, enc, callback) => {
	const { contents, path } = file;

	// A little hacky, but an easy way to have each file export information about the spell
	const index = contents.toString().indexOf('@endmeta');
	const js = contents.toString().substring(0, index + 8);
	if (index === -1 || !js.includes('@endmeta')) {
		console.warn('metadata not found. Path: ' + path);
		callback(null);
		return;
	}

	const metadata = eval(js);

	// Otherwise we need to make a new macro!
	const macroJson = {
		"_id": metadata.id,
		"command": contents.toString(),
		"flags": {
			"advanced-macros": {
				"runAsGM": false
			}
		},
		"folder": null,
		"img": "icons/svg/dice-target.svg",
		"name": metadata.name,
		"permission": {
			"default": 0
		},
		"scope": "global",
		"sort": 0,
		"type": "script"
	};

	newMacros.push(macroJson);

	callback(null);
};

const finishedConverting = (callback) => {
	fs.rmSync(packName, { force: true });
	const db = fs.createWriteStream(packName, { flags: "a", mode: 0o664 });

	newMacros.sort((lhs, rhs) => (lhs.name) > (rhs.name) ? 1 : -1);
	newMacros.forEach(macro => db.write(JSON.stringify(macro) + "\n"));
	db.close();

	callback();
};

export const packFile = () => {
	return gulp.src('Macros/**/*.js')
		.pipe(preprocess({
			includeBase: resolve() + '/Preprocessors',
		}))
		.pipe(through2.obj(macroToJson, finishedConverting, undefined));
};