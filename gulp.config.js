'use strict';

module.exports = {
  lintScripts: [
    './gulpfile.js',
    './gulp_tasks/*.js',
    './app/app.js',
    './app/run.js',
    './app/config.js',
    './app/shots/shots.js',
    './app/**/*.controller.js',
    './app/**/*.directive.js',
    './app/**/*.service.js',
    './app/**/*.factory.js',
    './app/**/*.filter.js'
  ],
  uglify: {
    compress: true,
    mangle: true
  },
  cssOptions: {
    processImport: false
  },
  templates: {
    src: ['./app/**/*.html'],
    dest: './public/app'
  },
  images: {
    src: ['./public/images/**/*'],
    dest: './public/images'
  },
  scripts: {
    src: [
      './app/app.js',
      './app/config.js',
      './app/run.js',
      './app/models/*.js',
      './app/shots/shots.js',
      './app/**/*.app.js',
      './app/**/*.config.js',
      './app/**/*.controller.js',
      './app/**/*.directive.js',
      './app/**/*.factory.js',
      './app/**/*.service.js',
      './app/templates.js'
    ],
    dest: './public/js',
    output: 'app.min.js'
  },
  css: {
    src: [
      './bower_components/semantic/dist/semantic.min.css',
      './css/app.css'
    ],
    dest: './public/css',
    output: 'app.min.css',
  },
  fonts: {
    srcAwesome: [
      './bower_components/font-awesome/fonts/*.woff*',
      './bower_components/font-awesome/fonts/*.ttf*'
    ],
    srcSemantic: [
      './bower_components/semantic/dist/themes/default/assets/fonts/*.woff*',
      './bower_components/semantic/dist/themes/default/assets/fonts/*.ttf*'
    ],
    destAwesome: './public/fonts',
    destSemantic: './public/css/themes/default/assets/fonts'
  },
  angularScripts: {
    /* jshint ignore:start */
    src: [
      './node_modules/angular/angular.min.js',
      //'./node_modules/angular-resource/angular-resource.min.js',
      './node_modules/angular-route/angular-route.min.js',
      './node_modules/angular-ui-router/release/angular-ui-router.min.js',
      './node_modules/angular-ui-router.stateHelper/statehelper.min.js'
      ],

    /* jshint ignore:end */
    dest: './public/js',
    output: 'angular.min.js'
  }
};