// 创建构建脚本对页面.ejs做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';
gulp.task('pages', () => {
    return gulp.src(['app/**/*.ejs']) // **各个嵌套目录的ejs文件
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})