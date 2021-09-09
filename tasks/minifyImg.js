import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export default function minifyImg() {
  return gulp.src('img/*.{png,jpg,gif}')
         .pipe(imagemin({
           optimizationLevel: 3,
           progressive: true,
           interlaced: true
         }))
         .pipe(gulp.dest('dist/img'));
};