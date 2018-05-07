// Generator用法解析
var gen = function*(n) {
	for (var i = 0; i < 3; i++) {
		n++
		// yield 暂停执行后面的代码
		yield n
	}
}
var genObj = gen(2);
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
// 2 3 4 5 underfined