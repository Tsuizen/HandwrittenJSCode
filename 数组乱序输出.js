function shuffle(array) {
  let length = array.length;

  while (length) {
    let random = ~~(Math.random() * length--);
    [array[length], array[random]] = [array[random], array[length]];
  }

  return array;
}
let array = new Array(52).fill(0).map((_, idx) => idx + 1);

console.log(shuffle(array));
