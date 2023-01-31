function mySetTimeout(fn, delay) {
  let timeout = null;

  function interval() {
    fn();

    timeout = setTimeout(() => {
      interval();
    }, delay)
  }

  setTimeout(interval, delay);

  return {
    cancel: () => {
      clearTimeout(timeout);
    }
  }
}

// 测试
//传进一个console.log的函数，解构出cancel方法
const {cancel} = mySetTimeout(() => console.log(888), 1000)
setTimeout(() => {
  cancel()
}, 4000)
