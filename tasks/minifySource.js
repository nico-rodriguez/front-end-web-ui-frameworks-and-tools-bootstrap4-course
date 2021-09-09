import gulp from 'gulp';

import cleanCSS from 'gulp-clean-css';
import flatmap from 'gulp-flatmap';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev';
import uglify from 'gulp-uglify';
import usemin from 'gulp-usemin';


export default function minifySource() {
  return gulp.src('./*.html')
         .pipe(flatmap(function(stream, file) {
          return stream
            .pipe(usemin({
              css: [rev()],
              html: [function() {
                return htmlmin({collapseWhitespace: true})
              }],
              js: [uglify(), rev()],
              inlinejs: [uglify()],
              inlinecss: [cleanCSS(), 'concat']
            }))
         }))
         .pipe(gulp.dest('dist/'));
};