Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('TypeError')
  }

  const args = [...arguments].slice(1);

  let fn = this;

  const bound = function () {
    // 当一个绑定函数是用new来构建一个值的，原来提供的 this 就会被忽略。看下方test2
    return fn.apply(this instanceof fn ? this : context, args.concat(...arguments));
  }

  bound.prototype = fn.prototype;
  return bound;
}


// test1
this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;

console.log(retrieveX());
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.myBind(module);
console.log(boundGetX()); // 81


// test2
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

var emptyObj = {};

var YAxisPoint = Point.myBind(emptyObj, 0/*x*/);

console.log((new YAxisPoint).toString())
