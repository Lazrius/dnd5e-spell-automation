import gulp from 'gulp';
import through2 from 'through2';
import preprocess from 'gulp-preprocess';
import * as fs from 'fs';
import {basename, resolve} from 'path';

import { createRequire } from "module";
global.require = createRequire(import.meta.url);

const randomID = (length = 16) => {
	const rnd = () => Math.random().toString(36).substring(2);
	let id = "";
	while (id.length < length)
		id += rnd();
	return id.substring(0, length);
};

const macros = [];
const macroToJson = async (file, enc, callback) => {
	const {contents, path} = file;
	const fileName = basename(path);

	const macroJson = {
		"_id": randomID(),
		"command": contents.toString(),
		"flags": {
			"advanced-macros": {
				"runAsGM": false
			}
		},
		"folder": null,
		"img": "icons/svg/dice-target.svg",
		"name": "Animate " + fileName.replace(/\.[^/.]+$/, ""),
		"permission": {
			"default": 0
		},
		"scope": "global",
		"sort": 0,
		"type": "script"
	};

	macros.push(macroJson);

	callback(null);
};

export const finishedConverting = (callback) => {
	fs.rmSync('jb2a-dnd5e-macros.db', {force: true});
	const db = fs.createWriteStream('jb2a-dnd5e-macros.db', {flags: "a", mode: 0o664});

	macros.sort((lhs, rhs) => (lhs.name) > (rhs.name) ? 1 : -1);
	macros.forEach(macro => db.write(JSON.stringify(macro) + "\n"));
	db.close();

	callback();
};

export default () => {
	return gulp.src('Macros/**/*.js')
		.pipe(preprocess({
			includeBase: resolve() + '/Preprocessors',
		}))
		.pipe(through2.obj(macroToJson, finishedConverting, undefined));
};
