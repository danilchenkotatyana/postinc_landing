// Get the project folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`; // You can also use rootFolder
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/assets/js/`,
		css: `${buildFolder}/assets/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/app.scss`,
		html: `${srcFolder}/templates/*.html`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/templates/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}