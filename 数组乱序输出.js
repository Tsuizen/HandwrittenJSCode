function shuffle(array) {
  let length = array.length;

  while (length) {
    let random = ~~(Math.random() * length--);
    [array[length], array[random]] = [array[random], array[length]];
  }

  return array;
}

let array = new Array(52).fill(0).map((_, idx) => idx + 1);

//qwik框架中的实现
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffleArray(array));



