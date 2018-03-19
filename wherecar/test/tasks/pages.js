// 创建构建脚本对页面.ejs做处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args.js';
import fileinclude from 'gulp-file-include';
gulp.task('pages', () => {
    return gulp.src(['app/views/pages/*.html']) // **各个嵌套目录的html文件
        .pipe(fileinclude({
        	prefix: '@@',//变量前缀 @@include
            basepath: '././app/views/includes',//引用文件路径
            indent:true//保留文件的缩进
        }))
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(args.watch, livereload()))
})