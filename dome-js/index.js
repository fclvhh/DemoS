// 1. 没有new的代码实现

function Person(name,age) {
  var temp = {}
  temp.name = name
  temp.age = age
  // 绑定原型
  temp.__proto__ = Person.prototype 
  return temp
}
Person.prototype.run = function() {
  console.log('跑起来!!!')
}
Person.prototype.eat = function() {
  console.log("吃饱了!!!")
}
var obj1 = Person('张三',19)

// 没有new 完成继承
function Children(name,age) {
  // 等价于 let temp = Person(name,age) , 这里this就是指children
  console.log('hi')
  let temp = Person(name,age)
  console.log(1)
  // 在原型上绑定属性
  temp.__proto__.cry = Children.prototype.cry
  console.log(2)
  return temp
}
Children.prototype.cry = function() {
  console.log('呜呜呜!!!')
}
var obj2 = Children('son',1)