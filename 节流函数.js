function throttle(fn, delay) {
  let valid = true;

  return function(...args) {
    if (!valid) {
      return;
    }

    valid = false;

    setTimeout(() => {
      fn.apply(this, args);
      valid = true;
    }, delay)
  }
}
