import gulp from 'gulp';

import browserSync from './tasks/browserSync.js';
import clean from './tasks/clean.js';
import copyFonts from './tasks/copyFonts.js';
import minifyImg from './tasks/minifyImg.js';
import processSass from './tasks/processSass.js';
import minifySource from './tasks/minifySource.js';
import watch from './tasks/watch.js';


const defaultTask = gulp.series(browserSync, watch);

const build = gulp.series(clean, gulp.parallel(copyFonts, minifyImg, minifySource));


export default defaultTask;
export { build };