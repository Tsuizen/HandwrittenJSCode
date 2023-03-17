function customInterval(callback, interval) {
  let timer = null;
  const now = Date.now;
  let startTime = now();
  let endTime = startTime;

  const loop = () => {
    timer = window.requestAnimationFrame(loop);
    endTime = now();
    if (endTime - startTime >= interval) {
      startTime = endTime;
      callback(timer);
    }
  }

  timer = window.requestAnimationFrame(loop);
  return timer;
}

let a = 0;
customInterval(timer => {
  console.log(1);
  a++;
  if (a === 3) {
    cancelAnimationFrame(timer);
  }
}, 1000);
