// 创建构建脚本对各个脚本串联起来做处理
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
gulp.task('build', gulpSequence('clean','css','pages','scripts',['browser','server']));