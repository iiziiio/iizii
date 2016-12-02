'use strict';

var gulp = require('gulp'),
    ag   = require('acquia-gulp')(gulp);

/**
 * Make a default build process by utilizing the Acquia Gulp tasks.
 */
gulp.task('build', [
  'pages',
  'scripts:compile',
  'audits:quality:styles:scss',
  'styles:compile',
  'audits:quality:styles:css'
]);

/**
 * By default, perform the build.
 */
gulp.task('default', ['build']);
