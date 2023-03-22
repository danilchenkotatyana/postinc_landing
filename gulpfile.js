// Main module
import gulp from "gulp";
// Paths
import { path } from "./gulp/config/path.js";
// Common plugins
import { plugins } from "./gulp/config/plugins.js";

// Global variables
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Tasks import
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSpriteTask } from "./gulp/tasks/svg-sprive.js";
import { zip } from "./gulp/tasks/zip.js";
// import { ftp } from "./gulp/tasks/ftp.js";

// Watchers
function watcher() {
	gulp.watch(path.watch.html, html); //gulp.series(html, ftp)
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// Sequential font processing
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Main tasks
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images, svgSpriteTask));

// Building scenarios for executing tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
// const deployFTP = gulp.series(reset, mainTasks, ftp);

// Export scenarios
export { svgSpriteTask }
export { dev }
export { build }
export { deployZIP }
// export { deployFTP }

// Executing the Default Script
gulp.task('default', dev);