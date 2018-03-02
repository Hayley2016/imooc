// 字符串扩展
{
	console.log('a','\u0061'); // a a
	console.log('s','\u20bb7'); // s ₻7
	console.log('s','\u{20bb7}'); // s 𠮷
}
{
	// es5处理 unicode // es5中对Unicode处理是不到位的
	let s='𠮷'; // 该字符的编码值是大于2个字节的，系统就处理成4个字节，
	console.log(s.length); // 2 // 在计算长度时，每两个字节是一个长度
	console.log('0',s.charAt(0)); // 0 � // 取第一个位置字符
	console.log('1',s.charAt(1)); // 1 � // 取第二个位置字符
	console.log('at0',s.charCodeAt(0)); // at0 55362 // 取第一个字符unicode编码值
	console.log('at1',s.charCodeAt(1)); // at1 57271 // 取第二个字符unicode编码值
	// es6处理Unicode
	console.log('code0',s.codePointAt(0).toString(16)); // 20bb7
}