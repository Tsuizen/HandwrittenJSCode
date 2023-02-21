function red() {
  console.log('red')
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}

const task = (timer, light) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      } else if (light === 'green') {
        green()
      } else if (light === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
  })

// const step = () => {
//   task(1000, 'red')
//     .then(() => task(1000, 'green'))
//     .then(() => task(1000, 'yellow'))
//     .then(step)
// }

const step = async () => {
  while (true) {
    await task(1000, 'red');
    await task(1000, 'green');
    await task(1000, 'yellow');
  }
}

step()
