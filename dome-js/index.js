
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




























