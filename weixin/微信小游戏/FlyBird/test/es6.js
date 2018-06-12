/**
 * Created by 傅令杰
 * es6中的面向对象和继承
 */
class Animal {

  constructor(name = '无姓名', age = 0) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(this.name, this.age);
  }
}
// Cat 继承 Animal
class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  say() {
    // 调用父类的方法
    super.say();
    console.log('这是子类的say');
  }
}

const cat = new Cat('小猫哈哈', 2);
cat.say();