
// ES3: 没有new 完成上述代码
function  Animal2(name,age) {
  let temp = {} // 1.手动创建空对象
  temp.name = name
  temp.age = age   // 从这里的比较就可以发现 , this究竟值的是什么!!! 就是临时空对象
  temp.__proto__ = Animal2.prototype
  return temp
}
Animal2.prototype.eat = function() {
  console.log('吃吃吃!!!')
}
Animal2.prototype.run = function() {
  console.log('跑起来吧!!!')
}
let animal2 = Animal2('dog',2)



// ES3 代码实现 
  // 1. 私有属性
function Animal (name,age) {
  this.name = name
  this.age = age
}
  // 2. 共有属性 , 绑在构造函数的原型上
Animal.prototype.eat = function() {
  console.log('吃吃吃!!!')
}
Animal.prototype.run = function() {
  console.log('跑起来吧!!!')
}
  // 3. 创建实例
let animal = new Animal('cat',1)
animal.run()
animal.eat()

// ES3实现继承 
function Human(idCard,name,age) {
  // 1. 获取父类的属性
  Animal.call(this,name,age)
  this.idCard = idCard
}
  // 2. 获取父类的公共方法
Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Human

Human.prototype.use = function() {
  console.log('人类和动物最大的区别: 人类会使用工具!!!')
}
let human = new Human(111111,'sun',19)
console.log(human)




class Person {
  // 私有代码放在constructor 里面
  constructor(name,age) {
    this.name = name
    this.age = age
  }
  // 共有代码放到外面
  eat() {
    console.log('吃吃吃!!!')    
  }
  run() {
    console.log('跑跑跑!!!') 
  }
  hand = 'five'
}

class Children extends Person {
  constructor(name,age,id) {
    super(name,age)
    this.id = id
  }
  cry() {
    console.log('哭哭哭!!!')    
  }
}
let nn = new Children('sun',1,111)

// mixin 代码
const mixin = (Base,mixins) => Object.assign(Base.prototype,mixins)
const Fly = {
  canFly() {
    console.log('飞飞飞!!!')
  }
}
class Bird {
  eag() {
    console.log('下蛋啦!!!')
  }
}
mixin(Bird,Fly)
let mm = new Bird() 

// mixin变异版
const RunMixin = (Base) => class extends Base {
      canRun() {
        console.log('running!!!')
    
  }
}
const SwimMixin = Base => {
  return class extends Base {
    canSwim() {
      console.log('游泳!!!')
    }
  }
}
class Xxx {
  xuan() {
    console.log('只有我一个人想笑吗!!!')
  }
}
console.log('2')
const RunXxx = RunMixin(Xxx)
console.log(RunXxx)
console.log('1')
let x1 = new RunXxx() 

const SwimXxx = SwimMixin(Xxx)
let x2 = new SwimXxx()


// 测试题代码!!

class People {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log('我的名字是'+this.name)
  }
  setName(value) {
    this.name = value
    console.log(this.name)
  }
}
class Doctor extends Person {
  constructor(name,profession) {
    super(name)
    this.profession = profession
  }
  sayProfession() {
    console.log('我的职业是'+this.profession)
  }
}

// function People(name) {
//   this.name = name
// }
// People.prototype.sayName = function() {
//   console.log('我的名字是'+this.name)
// }
// People.prototype.setName = function(value) {
//   this.name = value
//   console.log(this.name)
// }

// function Doctor(name,profession) {
//   People.call(this,name)
//   this.profession = profession
// }
// Doctor.prototype = Object.create(People.prototype)
// Doctor.prototype.construct = Doctor
// Doctor.prototype.sayProfession = function() {
//   console.log('我的职业是'+this.profession)
// }


// 闭包代码
function Counter() {
  let num = 0
  function add() {
    num++
    console.log(num)
  }
  return add
}
let add1 = Counter()
add1() //  1
add1() //  2

// 闭包: 封装数据
  // 1. cache 是一个api对象 , 函数自调用返回一个api对象  「jQuery设计原理」
  // 2. api对象 , 里有三个api函数 , 根据闭包 , 会回溯store对象
  // 3. 我们只能按照事先写好的逻辑操作store , 不可以随意修改
const cache = (()=>{
  const store = {}
  return {
    get(key) {
      return store[key]
    },
    set(key,value) {
      store[key] = value 
    },
    remove(key) {
      delete store[key]
    }
  }
})()

// 闭包:暂存数据
function sum(a) {
  return function(b) {
    return a+b
  }
}
const sum1 = sum(1)
const sum2 = sum1(2)
console.log(sum2)

// 闭包 : 模仿私有属性
function Cat() {
  var name
  // 内部函数 , 引用词法作用域的变量 , 形成闭包
  this.setName = function(value) {
    name = value
  }
  this.getName = function() {
    return name
  }
}
console.log('hi')
let mimi = new Cat()
mimi.setName('wuwuwu')
mimi.getName()

class cat {
  constructor() {
    var name
    Object.assign(this,{
      setName(value) {
        name = value
      },
      getName() {
        return name
      }
    }) 
  }
}
let pupu = new cat()
pupu.setName('七七')
pupu.getName()

// 闭包： 高阶函数
const makeUrl = function(domain) {
  function fn(path) {
    return `https://${domain}${path}`
  }
  return fn
}
const makeXdmlUrl = makeUrl(`xiedaimala.com`)
const url1 = makeXdmlUrl('/index')


// 闭包: 面试题
function makeCounter() {
  let count = 0
  return function() {
      return ++count
  }
}
let counter = makeCounter()
let counter2 = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter2())

let users = [
  {name:"Bob",age:20,company:"Baidu"},
  {name:"Cat",age:18,company:"Alibaba"},
  {name:"Ann",age:19,company:"Tecent"}
]
users.sort(byName)
users.sort(byAge)
users.sort(byField('company'))
users.sort(byField('age'))

function byName(user1,user2) {
  return user1.name>user2.name?1:-1
}
function byAge(user1,user2) {
  return user1.age>user2.age?1:-1
}
function byFeild(field) { 
  return function(user1,user2){ 
    return user1[field]>user2[field]?1:-1
  }
}

// 闭包: 测试题
class People {
  constructor() {
    var firstName
    var lastName
    Object.assign(this,{
      getFirstName() {
        return firstName
      },
      setFirstName(value) {
        firstName = value
      },
      getLastName() {
        return lastName
      },
      setLastName(value) {
        lastName = value
      }  
    })
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}









