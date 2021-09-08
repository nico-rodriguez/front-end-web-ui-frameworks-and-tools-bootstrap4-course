'use strict';

function watch() {
  gulp.watch('./css/*.scss', ['sass']);
};

module.exports = watch;