/**
 * Created by 傅令杰
 * es5中的面向对象和继承
 */
(function () {
  'use strict';

  // 函数声明 Google不推荐的写法 会把function的作用域提升到所有的变量之前
  // 即js一加载的时候就初始化function，不管你的function写在什么位置
  // 在用条件判断function是否创造 或者 给function赋不同的执行体的时候 是不可取的
  // function Animal() {
  //
  // }
  // 用函数表达式写function
  var Animal = function (name, age) {
    this.name = name;
    this.age = age;
    // this.say = function () {
    //   console.log(this.name + '  ' + this.age);
    // }
  };
  // 直接给原型链赋值
  Animal.prototype.say = function () {
    console.log(this.name + '  ' + this.age);
  };

  // var cat = new Animal('小猫', 3);
  // cat.say();
  //
  // 寄生组合继承
  // //call() apply()
  // //调用一个对象的一个方法，用另一个对象替换当前对象
  //
  // Animal.prototype.say.apply(cat);
  // var params = {
  //     name: '小猫2',
  //     age: 4
  // };
  //
  // cat.say.call(params);

  //寄生组合继承
  var Cat = function (name, age) {
    // Animal.apply(this, arguments);
    Animal.apply(this, [name, age]);
    // Animal.call(this, name, age);
  };
  // 浅克隆
  Cat.prototype = Object.create(Animal.prototype);
  //区分
  // Cat.prototype = new Animal();
  Cat.prototype.say = function () {
    var p = {
      name: '父类名字',
      age: 10
    };
    Animal.prototype.say.apply(p);
    console.log('这是子类的名字' + this.name + this.age);
  };

  var cat1 = new Cat('子猫', 5);
  cat1.say();
})();