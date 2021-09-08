'use strict';

const bs = require('browser-sync');

function browserSync() {
  const files = [
    './*.html',
    './css/*css',
    './js/*.js',
    './img/*.{png,jpg,gif}'
  ];

  bs.init(files, {
    server: {
      baseDir: './'
    }
  });
};

module.exports = browserSync;