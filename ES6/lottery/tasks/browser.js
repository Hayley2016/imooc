// 创建构建脚本对...做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args.js';
gulp.task('browser', (cb) => {
    if (!args.watch) return cb();
    gulp.watch('app/**/*.js', ['scripts']); // 监听原始文件夹app下的js发生改变则调用scripts脚本
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});