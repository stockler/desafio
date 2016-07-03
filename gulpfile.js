'use strict';

var gulp = require('gulp');
var gulpConfig = require('./gulp.config.js');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build-app', function() {
  return gulp
    .src(gulpConfig.scripts.src)
    .pipe(concat(gulpConfig.scripts.output))
    //.pipe(uglify(gulpConfig.uglify))
    .pipe(gulp.dest(gulpConfig.scripts.dest));
});

gulp.task('build-html', function() {
  return gulp
    .src(gulpConfig.templates.src)
    //.pipe(uglify(gulpConfig.uglify))
    .pipe(gulp.dest(gulpConfig.templates.dest));
});


/*require('./tasks/css.js');
require('./tasks/css-all.js');
require('./tasks/fonts.js');
require('./tasks/vendor-scripts.js');
require('./tasks/scripts.js');
require('./tasks/build-scripts.js');
require('./tasks/build-angular.js');
require('./tasks/build-externals.js');
require('./tasks/build-froala.js');
require('./tasks/gzip-scripts.js');
require('./tasks/copy-paginator.js');
require('./tasks/build.js');
require('./tasks/lint.js');
require('./tasks/templates.js');
require('./tasks/i18n.js');
require('./tasks/server.js');
require('./tasks/robots.js');
require('./tasks/images.js');
require('./tasks/watch.js');
require('./tasks/default.js');*/