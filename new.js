/*
在调用 new 的过程中会发生以上四件事情：
（1）首先创建了一个新的空对象

（2）设置原型，将对象的原型设置为函数的 prototype 对象。

（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
*/

function objectFactory(constructor, ...args) {
  if (typeof constructor !== 'function') {
    throw new Error('TypeError')
  }

  const newObj = Object.create(constructor.prototype);
  const result = constructor.apply(newObj, args);
  let flag = result && (typeof result === 'object' || typeof result === 'function');

  return flag ? result : newObj;
}

function Person(age) {
  this.age = age
}

Person.prototype.name = 'tsuizen';

const person = objectFactory(Person, 26);

console.log(person.age);
