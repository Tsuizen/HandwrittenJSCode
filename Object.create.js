// 以传入的对象为原型创建一个新对象

function create(obj) {
  function F() {
  }

  F.prototype = obj;
  return new F();
}

const obj = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
}

obj.name = 'Tsuizen';

const copy = create(obj);
copy.printIntroduction()

console.log(Object.getPrototypeOf(copy))

