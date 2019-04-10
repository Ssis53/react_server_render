const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const bs = require('browser-sync').create();
const path = require('path');
const ROOT = path.resolve(__dirname);
const webpack = require('webpack-stream');

gulp.task('start',['browser-sync'], function() {
  gulp.watch(['./public/**', './views/**', './routes/**'], ['re-load']);
});

gulp.task('browser-sync', ['nodemon'], function() {
  bs.init({
    proxy: 'http://localhost:3000',
    port: 4000
  });
});

gulp.task('nodemon', ['re-pack'], function(cb) {
  var started = false;
  nodemon({
    script: './bin/www',
    ext: "js jsx css",
    ignore: [
      ".git",
      ".md",
      "dist/**"
    ],
    env: {
      'NODE_ENV': 'development'
    },
    watch: [
      ROOT
    ]
  }).on('start', function() {
    if(!started) {
      console.log('**************nodemon first start****************')
      cb();
      started = true;
    }
  }).on('restart', function() {
    console.log('****************nodemon restart*****************')
  });
});




gulp.task('re-load', ['re-pack'], function() {
  bs.reload();
});

gulp.task('re-pack', function() {
  return gulp.src(path.join(ROOT, '/public/javascripts/reactApp/index.js'))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});
