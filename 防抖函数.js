function debounce(fn, delay, immediate) {
  let timer = null;

  return function(...args) {
    let callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(this, args);
      }
      timer = null;
    }, delay)

    callNow && fn.apply(this, args);
  }
}
