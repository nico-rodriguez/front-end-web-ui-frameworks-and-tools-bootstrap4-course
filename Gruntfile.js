'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  const configs = require('load-grunt-configs')(grunt);
  grunt.initConfig(configs);

  grunt.registerTask('css', ['sass']);
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'imagemin',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ])
};