// 简单工厂
class Factory {
  constructor(username, pwd, role) {
    this.username = username;
    this.pwd = pwd;
    this.role = role;
  }
}

class CreateRoleFactory {
  static create(username, pwd, role) {
    return new Factory(username, pwd, role);
  }
}

// 工厂方法
class User {
  constructor(name, menuAuth) {
    if (new.target === User) throw new Error('User 不能被实例化')
    this.name = name;
    this.menuAuth = menuAuth;
  }
}

class UserFactory extends User {
  constructor(...props) {
    super(...props);
  }

  static create(role) {
    const roleCollection = new Map([['admin', () => new UserFactory('管理员', ['首页', '个人中心'])], ['user', () => new UserFactory('普通用户', ['首页'])]])

    return roleCollection.get(role)();
  }
}

const admin = UserFactory.create('admin');

// 抽象工厂: 一个用户可能存在于多个平台
class User2 {
  constructor(company) {
    if (new.target === User2) throw new Error('抽象类不能实例化');
    this.company = company;
  }
}

class GoogleUser extends User2 {
  constructor(name, departmentsAuth) {
    super('Google');
    this.name = name;
    this.departmentsAuth = departmentsAuth;
  }
}

class AmazonUser extends User2 {
  constructor(name, departmentsAuth) {
    super('Amazon');
    this.name = name;
    this.departmentsAuth = departmentsAuth;
  }
}

const getAbstractUserFactory = (company) => {
  switch (company) {
    case 'Google':
      return GoogleUser;
    case 'AmazonUser':
      return AmazonUser;
  }
}

const GoogleUserClass = getAbstractUserFactory('Google');
const AmazonUserClass = getAbstractUserFactory('Amazon');

const user1 = new GoogleUser('Brin', ['All']);
const user2 = new AmazonUser('Bezos', ['All']);
