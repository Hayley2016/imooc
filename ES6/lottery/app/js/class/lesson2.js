// 正则扩展
{
    // es5-i修饰符，用于执行对大小写不敏感的匹配
    // es5-g修饰符，用于执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
    let regex1 = new RegExp('xyz', 'i'); // ES5写法
    let regex2 = new RegExp(/xyz/i); // ES5写法，//俩斜杠(第一个参数为正则表达式)这种写法只能传递一个参数，而在ES6中可以传递两个参数
    console.log(regex1.test('x88yz123'), regex2.test('88xyz123')); // true true
    let regex3 = new RegExp(/xyz/ig, 'g'); // ES6写法,可以传两个参数，后面的修饰符参数会替换前面的参数
    console.log(regex3.flags); // g // ES6新增flags属性来获得正则对象修饰符
} {
	// es6-理解y修饰符
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one', a1.exec(s), a2.exec(s));
    console.log('two', a1.exec(s), a2.exec(s));
    // g修饰符。只要字符串中存在就匹配_bb_b中存在b+这种形式，
    // y修饰符需要紧跟上一次匹配之后的_bb_b开始匹配，_bb_b的开始是_就匹配不成功
    console.log(a1.sticky,a2.sticky);
    // ES6中sticky属性判断正则对象是否开启y修饰符作用
}{
	// es6-理解u修饰符
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); // u-1 true // \uD83D\uDC2A解析为两个字符
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A')); // u-2 false // \uD83D\uDC2A解析为1个字符
	console.log(/\u{61}/.test('a')); // false
	console.log(/\u{61}/u.test('a')); // true
	// 如果字符串中有大于两个字节的字符要加上u修饰符
	// 修正es5中概念，.并不能匹配所有字符，需要该字符小于两个字节长度才能匹配
	// es6-提案s修饰符，处理换行符、分隔符等特殊字符
}