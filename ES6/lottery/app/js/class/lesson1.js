// 解构赋值
{
    let a, b, rest, c, d;
    [a, b, c = 3, d] = [1, 2]; // 数组结构赋值基本用法
    console.log(a, b, c, d);
} {
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6]; // ...的用法
    console.log(a, b, rest);
} {
    let a, b;
    ({ a, b } = { a: 1, b: 2 }); // 对象解构赋值基本用法
    console.log(a, b);
} {
    let a = 1,
        b = 2;
    [a, b] = [b, a]; // 运用解构赋值一个语句就轻松实现了变量交换
    console.log(a, b);
} {
    function f() {
        return [1, 2];
    }
    let a, b;
    [a, b] = f();
    console.log(f(), a, b);
} {
    function f() {
        return [1, 2, 3, 4, 5, 6]; // 选择性接受参数
    }
    let a, b, c;
    [a, , , b] = f();
    console.log(a, b);
} {
    function f() {
        return [1, 2, 3, 4, 5, 6]; // 不确定参数返回个数
    }
    let a, b, c;
    [a, ...b] = f();
    console.log(a, b);
} {
    let o = { p: 11, q: true }; // 对象解构赋值
    let { p, q } = o;
    console.log(p, q);
} {
    let { a = 10, b = 5 } = { a: 3 };
    console.log(a, b);
} {
    let metaData = { // 对象嵌套解构赋值
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    };
    let { title: atitle, test: [{ title: btitle }] } = metaData;
    console.log(atitle, btitle);
}