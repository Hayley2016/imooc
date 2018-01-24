// 创建构建脚本对css做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';
gulp.task('css', () => {
    return gulp.src(['app/**/*.css'])
        .pipe(gulp.dest('server/public/css'))
        .pipe(gulpif(args.watch, livereload()))
})