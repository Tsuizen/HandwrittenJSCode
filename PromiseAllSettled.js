function promiseAllSettled(promises) {
  if (!Array.isArray(promises)) {
    throw new Error('param is note array');
  }

  return new Promise((resolve, reject) => {
    let count = 0;
    let result = [];

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(val => {
        count++;
        result.push({
          'status': 'fulfilled',
          'value': val
        })
        if (count === promises.length) {
          resolve(result);
        }
      }, err => {
        count++;
        result.push({
          'status': 'rejected',
          'value': err
        })
        if (count === promises.length) {
          resolve(result);
        }
      })
    }
  })
}
