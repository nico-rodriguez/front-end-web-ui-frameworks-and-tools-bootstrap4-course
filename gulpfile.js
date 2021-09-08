'use strict';

const gulp = require('gulp');

const browserSync = require('./tasks/browserSync');
const processSass = require('./tasks/processSass');
const watch = require('./tasks/watch');


const build = gulp.series(browserSync, watch);

exports.default = build;