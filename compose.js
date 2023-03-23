function compose(...fns){
  return function(x){
    return fns.reduceRight(function(arg, fn){
      return fn(arg);
    }, x)
  }
}

function convertString(num) {
  return num + '';
}

function getThreeString(str) {
  return str.slice(0, 3);
}

const getResult = compose(getThreeString, convertString);

console.log(getResult(12345));
