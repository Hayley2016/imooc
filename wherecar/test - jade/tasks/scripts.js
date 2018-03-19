// 创建构建脚本对js做处理
import gulp from 'gulp'; // 整个构建基于gulp
import gulpif from 'gulp-if'; // 在gulp语句中进行if判断
import concat from 'gulp-concat'; // 在gulp中处理文件拼接
import webpack from 'webpack'; // 打包
import gulpWebpack from 'webpack-stream'; // gulp 处理的都是文件流，是基于 stream ，对 webpack 的处理是结合 webpack-stream
import named from 'vinyl-named'; // 对重命名文件做标志
import livereload from 'gulp-livereload'; // 文件保存后，网页自动刷新，热更新
import plumber from 'gulp-plumber'; // 处理文件信息流
import rename from 'gulp-rename'; // 对文件重命名，相当于复制当前文件
import uglify from 'gulp-uglify'; // 压缩css、js
import { log, colors } from 'gulp-util'; // 在命令行工具输出的包
import args from './util/args.js'; // 对命令行参数进行解析
gulp.task('scripts', () => {
    // task 创建任务命令
    return gulp.src(['app/assets/js/**/*']) // 打开文件
        // .pipe(plumber({
        //     errorHandle: function() {}
        // }))
        // .pipe(named()) // 给文件重命名
        // .pipe(gulpWebpack({ // 编译js
        //     module: {
        //         loaders: [{
        //             test: /\.js$/,
        //             loader: 'babel-loader'
        //         }]
        //     }
        // }), null, (err, stats) => {
        //     log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        //         chunks: false
        //     }))
        // })
        // .pipe(gulp.dest('server/public/js')) // 编译完文件放在哪
        // .pipe(rename({ // 复制一份
        //     basename: 'cp',
        //     extname: '.min.js'
        // }))
        // .pipe(uglify({ // 并且压缩
        //     compress: { properties: false },
        //     output: { quote_keys: true }
        // }))
        .pipe(gulp.dest('dist/assets/js')) // 将复制压缩过的文件存储
        .pipe(gulpif(args.watch, livereload())) // 如果命令行有 watch 参数，则执行热更新
})