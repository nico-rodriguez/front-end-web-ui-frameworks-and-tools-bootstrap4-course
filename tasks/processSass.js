import sass from 'gulp-sass';

export default function processSass() {
  return gulp.src('./css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
};