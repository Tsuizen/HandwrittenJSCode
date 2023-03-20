// 高阶函数
const add = (x, y, f) => {
  return f(x) + f(y);
}

const num = add(2, 2, Math.abs);

// React中的高阶组件（HOC）就是一种装饰器模式，不改变原来组件的情况下添加一些属性，达到组件复用的功能

import React from "react";

const BhHoc = WrappedComponent => class extends React.Component {
  render() {
    <div style={{background: 'blue'}}>
      <WrappedComponent/>
    </div>
  }
}
