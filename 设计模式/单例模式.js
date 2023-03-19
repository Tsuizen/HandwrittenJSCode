// 懒汉模式（ 调用的时候再创建）
class Single {
  static getInstance () {
    if (!Single.instance) {
      Single.instance = new Single();
    }
    return Single.instance;
  }
}

class Single {
  static instance = new Single();

  static getInstance() {
    return Single.instance;
  }
}

// 实例如果存在，返回已创建的，符合开放封闭原则
// 使用场景：Redux, Vuex等状态管理工具，window对象，全局缓存等
