var gulp = require('gulp');
var uglify = require('gulp-uglify');
// import gulp from 'gulp';
// import gulpif from 'gulp-if';
// import livereload from 'gulp-livereload';
// import args from './util/args.js';
gulp.task('default', function() {
    return gulp.src(['wherecar_ui_cloud/assets/js/_private/login/login_pc.js'])
        .pipe(uglify())
        .pipe(gulp.dest('wherecar_ui_cloud_min'))
});
// gulp.task('default', function() {
//     return gulp.src(['wherecar_ui_cloud/assets/js/_private/login/login_public.js'])
//         .pipe(uglify())
//         .pipe(gulp.dest('wherecar_ui_cloud/assets/js1'))
// });