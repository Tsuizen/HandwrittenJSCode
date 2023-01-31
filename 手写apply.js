// 参加call，参数不同

// apply 函数实现
Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let result = null;
  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};


function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myApply(this, [name, price]);
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

greet.myApply(obj);  // cats typically sleep between 12 and 16 hours
