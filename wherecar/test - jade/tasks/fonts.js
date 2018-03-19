// 创建构建脚本对font做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';
gulp.task('fonts', () => {
    return gulp.src(['app/assets/fonts/**/*'])
        .pipe(gulp.dest('dist/assets/fonts'))
        .pipe(gulpif(args.watch, livereload()))
})