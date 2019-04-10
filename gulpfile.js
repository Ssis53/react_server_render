const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const bs = require('browser-sync').create();
const path = require('path');
const ROOT = path.resolve(__dirname);
const webpack = require('webpack-stream');

/**
 * start任务是gulp start命令启动入口，task函数的第二个参数是
 * 当前任务依赖任务。如果有依赖，那么当前任务会在依赖任务完成之后再进行
 * 如果依赖又有依赖依旧如此。所以start任务实际上是最后执行的
 */

/**
 * =======================初始化服务器阶段=========================
 */

 //  3. 开始监听文件变化，如果文件变化则启动re-load任务
gulp.task('start', ['browser-sync'], function() {
  gulp.watch(['./public/**', './views/**', './routes/**'], ['re-load']);
});

//  2. 拦截当前node服务器并将新的热更新服务分配到4000端口
gulp.task('browser-sync', ['nodemon'], function() {
  bs.init({
    proxy: 'http://localhost:3000',
    port: 4000
  });
});

//  1. 初始化nodemon，监听文件变化重启nodemon
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


/**
 * =======================更细阶段=========================
 */

// 执行刷新浏览器的任务
gulp.task('re-load', ['re-pack'], function() {
  bs.reload();
});

//  在change过程刷新浏览器之前和初始化服务器启动nodemon之前都需要重新编译
gulp.task('re-pack', function() {
  return gulp.src(path.join(ROOT, '/public/javascripts/reactApp/index.js'))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});
