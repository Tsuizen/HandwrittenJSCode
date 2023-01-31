/*
  判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
  判断传入上下文对象是否存在，如果不存在，则设置为 window 。
  处理传入的参数，截取第一个参数后的所有参数。
  将函数作为上下文对象的一个属性。
  使用上下文对象来调用这个方法，并保存返回结果。
  删除刚才新增的属性。
  返回结果。
*/

// call函数实现
Function.prototype.myCall = function (context) {
  // 判断调用对象是不是函数
  if (typeof this !== 'function') {
    throw new Error('TypeError');
  }

  // 获取传入的参数
  let args = [...arguments].slice(1), result = null;

  // 判断是否传入context，没有就设置为window或者globalThis
  context = context || globalThis;

  //  将调用函数this作为传入上下文对象的一个属性来让函数能够获取上下文中的其他属性
  context.fn = this;

  // 使用上下文对象调用这个函数
  result = context.fn(...args);

  // 删除这个额外属性
  delete context.fn;

  return result;
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myCall(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name)


function greet() {
  let reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

const obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.myCall(obj);  // cats typically sleep between 12 and 16 hours
