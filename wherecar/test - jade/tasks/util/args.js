// 处理命令行参数
// verbose-输出命令行详细日志
// watch-监听开发环境的变化
// production-区分开发环境和线上环境
// sourcemaps-映射
// port-服务器启动端口
// argv-对输入的命令行以字符串进行解析
import yargs from 'yargs';
const args = yargs
    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server post'
    })
    .argv
export default args;