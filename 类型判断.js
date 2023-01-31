function getType(value) {
  if (value === null) {
    return value + '';
  }

  if (typeof value === 'object') {
    let type = Object.prototype.toString.call(value);
    let res = type.split(' ')[1].split('');
    res.pop();
    return res.join('').toLowerCase();
  } else {
    return typeof value;
  }
}

let a = [];
console.log(getType(a))
