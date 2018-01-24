// 创建构建脚本对清空做处理
import gulp from 'gulp';
import del from 'del';
import args from './util/args.js';
gulp.task('clean', () => {
    return del(['server/public','server/views']);
});