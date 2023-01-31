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

const copy = create(obj);
copy.printIntroduction()

