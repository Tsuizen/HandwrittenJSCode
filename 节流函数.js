function throttle(fn, delay) {
  let valid = true;
  let timer = null;
  return function (...args) {
    if (!valid) {
      return;
    }

    valid = false;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
      valid = true;
    }, delay)
  }
}
