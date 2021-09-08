'use strict';

const sass = require('gulp-sass')(require('node-sass'));

function processSass() {
  return gulp.src('./css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
};

module.exports = processSass;