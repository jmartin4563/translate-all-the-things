'use strict';

var gulp = require('gulp');
var gettext = require('gulp-angular-gettext');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


gulp.task('pot', function () {
  return gulp.src(['src/app/**/*.html', 'src/app/**/*.js'])
    .pipe(gettext.extract('template.pot', {
        // options to pass to angular-gettext-tools...
    }))
    .pipe(gulp.dest('po/'));
});

gulp.task('translations', function () {
  return gulp.src('po/**/*.po')
    .pipe(gettext.compile({
        // options to pass to angular-gettext-tools...
        format: 'json'
    }))
    .pipe(gulp.dest('dist/translations/'));
});
