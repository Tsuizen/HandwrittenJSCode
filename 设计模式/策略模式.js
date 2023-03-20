const activity = new Map([
  ['pre', (price) => price * 0.95],
  ['onSale', (price) => price * 0.9],
  ['back', (price) => price * 0.85],
  ['limit', (price) => price * 0.8]
])

const getAcitvityPrice = (type, price) => activity.get(type)(price);

activity.set('newComer', (price) => price * 0.7);
