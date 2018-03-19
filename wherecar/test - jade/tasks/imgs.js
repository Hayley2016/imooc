// 创建构建脚本对img做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';
gulp.task('imgs', () => {
    return gulp.src(['app/assets/img/**/*'])
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(gulpif(args.watch, livereload()))
})