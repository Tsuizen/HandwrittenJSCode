class EventCenter {
  constructor() {
    this.handlers = {};
  }

  addEventListener(type, handler) {
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }

    this.handlers[type].push(handler);
  }

  dispatchEvent(type, params) {
    if (!this.handlers[type]) {
      return new Error('无绑定事件');
    }
    this.handlers[type].forEach(handler => {
      handler(...params);
    })
  }

  removeEventListener(type, handler) {
    if (!this.handlers[type]) {
      return new Error('事件无效');
    }

    if (!handler) {
      delete this.handlers[type];
    } else {
      const index = this.handlers[type].findIndex(handler);
      if (index === -1) {
        return new Error('无绑定事件');
      }

      this.handlers[type].splice(index, 1);

      if (this.handlers[type].length === 0) {
        delete this.handlers[type];
      }
    }
  }
}
