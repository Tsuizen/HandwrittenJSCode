function test (props) {
  console.log(props);
}

const proxyTest = test;
test = (level, message) => {
  let proxyContent = {
    level,
    props: message
  }

  proxyTest.call(this, proxyContent);
}

// test(1, 'test');
