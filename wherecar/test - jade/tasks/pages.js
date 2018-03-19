// 创建构建脚本对页面.ejs做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';
import jade from 'gulp-jade'
gulp.task('pages', () => {
    return gulp.src(['app/views/pages/*.html']) // **各个嵌套目录的html文件
        .pipe(jade())
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(args.watch, livereload()))
})