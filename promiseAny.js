function promiseAny(promises) {
  if (!Array.isArray(promises)) {
    throw new Error('TypeError');
  }

  return new Promise((resolve, reject) => {
    let len = promises.length;
    const errors = [];
    for (let promise of promises) {
      promise.then(res => {
        resolve(res);
      }, err => {
        len--;
        errors.push(err);
        if (!len) {
          reject(new AggregateError(errors));
        }
      })
    }
  })
}
