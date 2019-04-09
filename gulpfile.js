const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const bs = require('browser-sync').create();
const path = require('path');
const ROOT = path.resolve(__dirname);
// const dirPath = path.join(ROOT, 'public');

gulp.task('start',['browser-sync'], function() {
  gulp.watch(['./public/**', './views/**', './routes/**'], ['bs-delay']);
});

gulp.task('bs-delay', function() {
  // nodemon.emit('restart');
  bs.reload();
});

gulp.task('browser-sync', ['nodemon'], function() {
  bs.init({
    proxy: 'http://localhost:3000',
    port: 4000
  });
});

gulp.task('nodemon', function(cb) {
  var started = false;
  nodemon({
    script: './bin/www',
    ext: "js",
    env: {
      'NODE_ENV': 'development'
    },
    watch: [
      ROOT
    ]
  }).on('start', function() {
    if(!started) {
      console.log('!!!nodemon first start!!!')
      cb();
      started = true;
    }
  }).on('restart', function() {
    console.log('!!!!restart!!!!')
  });
});
