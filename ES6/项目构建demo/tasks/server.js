// 创建构建脚本对服务器做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动服务器
import args from './util/args.js';
gulp.task('server', (cb) => {
    if (!args.watch) return cb();
    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs', 'server/public/**/*.css'], function(file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() { // 监听需要重启服务的文件，发生改变则重启服务
        server.start.bind(server)();
    });
})