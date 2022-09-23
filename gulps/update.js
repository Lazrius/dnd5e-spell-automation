import gulp from 'gulp';
import git from 'gulp-git-streamed';
import archiver from "archiver";
import * as fs from 'fs';
import * as path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

function getConfig() {
	const configPath = path.resolve(process.cwd(), "foundryconfig.json");
	let config;

	if (fs.existsSync(configPath)) {
		config = loadJson(configPath);
		return config;
	} else {
		return;
	}
}

const getManifest = () => {
	const json = {
		root: "",
		file: {},
		name: ""
	};

	if (fs.existsSync("module.json")) {
		json.file = loadJson("module.json");
		json.name = "module.json";
	} else {
		return null;
	}

	return json;
};


const loadJson = (path) => {
	try {
		let str = fs.readFileSync(path).toString();
		return JSON.parse(str);
	}
	catch {
		throw Error("Unable to load " + path);
	}
};

const packageBuild = () => {
	const manifest = getManifest();
	if (manifest === null) {
		console.error("Manifest file could not be loaded.");
		throw Error();
	}

	return new Promise((resolve, reject) => {
		try {
			// Ensure there is a directory to hold all the packaged versions
			if(!fs.existsSync("dist"))
				fs.mkdirSync("dist");

			// Initialize the zip file
			const zipName = `${manifest.file.name}-v${manifest.file.version}.zip`;
			const zipFile = fs.createWriteStream(path.join("dist", zipName));
			const zip = archiver("zip", { zlib: { level: 9 } });

			zipFile.on("close", () => {
				console.log(zip.pointer() + " total bytes");
				console.log(`Zip file ${zipName} has been written`);
				return resolve(true);
			});

			zip.on("error", (err) => {
				throw err;
			});

			zip.pipe(zipFile);

			zip.directory(path.join(process.cwd(), 'dist'), false);
			return zip.finalize();
		} catch (err) {
			return reject(err);
		}
	});
};

const updateManifest = (cb) => {
	const packageJson = loadJson("package.json");
	const config = getConfig(),
		manifest = getManifest(),
		rawURL = config.rawURL,
		repoURL = config.repository,
		manifestRoot = manifest.root;

	if (!config)
		cb(Error("foundryconfig.json not found"));
	if (manifest === null) {
		cb(Error("Manifest JSON not found"));
		return;
	}
	if (!rawURL || !repoURL)
		cb(Error("Repository URLs not configured in foundryconfig.json"));

	try {
		const version = argv.update;
		if (!version) {
			cb(Error('Version info not provided.'));
			return;
		}

		/* Update version */

		const versionMatch = /^(\d{1,}).(\d{1,}).(\d{1,})$/;
		const currentVersion = manifest.file.version;
		let targetVersion = "";

		if (!version) {
			cb(Error("Missing version number"));
		}

		if (versionMatch.test(version)) {
			targetVersion = version;
		} else {
			targetVersion = currentVersion.replace(versionMatch, (substring, major, minor, patch) => {
				console.log(substring, Number(major) + 1, Number(minor) + 1, Number(patch) + 1);
				if (version === "major") {
					return `${Number(major) + 1}.0.0`;
				} else if (version === "minor") {
					return `${major}.${Number(minor) + 1}.0`;
				} else if (version === "patch") {
					return `${major}.${minor}.${Number(patch) + 1}`;
				} else {
					return "";
				}
			});
		}

		if (targetVersion === "") {
			return cb(Error("Error: Incorrect version arguments."));
		}

		if (targetVersion === currentVersion) {
			return cb(Error("Error: Target version is identical to current version."));
		}

		console.log(`Updating version number to '${targetVersion}'`);

		packageJson.version = targetVersion;
		manifest.file.version = targetVersion;

		/* Update URLs */

		const result = `${rawURL}/v${manifest.file.version}/dist/${manifest.file.name}-v${manifest.file.version}.zip`;

		manifest.file.url = repoURL;
		manifest.file.manifest = `${rawURL}/master/${manifestRoot}/${manifest.name}`;
		manifest.file.download = result;

		fs.writeFileSync("package.json", JSON.stringify(packageJson, null, '\t'));
		fs.writeFileSync(path.join(manifest.root, manifest.name), JSON.stringify(packageJson, null, '\t'), "utf8");

		return cb();
	} catch (err) {
		return cb(err);
	}
};

const gitTaskManifest = (cb) => {
	const manifest = getManifest();
	if (!manifest)
		return cb(Error("could not load manifest."));

	return gulp.src([`package.json`, `module.json`])
		.pipe(git.add({ args: "--no-all -f" }))
		.pipe(git.commit(`v${manifest.file.version}`, { args: "-a", disableAppendPaths: true }));
};

const gitTaskBuild = (cb) => {
	const manifest = getManifest();
	if (!manifest)
		return cb(Error("could not load manifest."));

	return gulp.src(`dist/${manifest.file.name}-v${manifest.file.version}.zip`)
		.pipe(git.checkout(`v${manifest.file.version}`, { args: '-b' }))
		.pipe(git.add({ args: "--no-all -f" }))
		.pipe(git.commit(`v${manifest.file.version}`, { args: "-a", disableAppendPaths: true }));
};

export const update = gulp.series(updateManifest, packageBuild, gitTaskManifest, gitTaskBuild);