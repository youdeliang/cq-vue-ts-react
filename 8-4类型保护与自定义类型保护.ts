function foo(n:string|number){
  // 类型断言
  (n as string).length
}
// typeof
function foo1(n:string|number){
  if(typeof n === 'string'){
    n.length
  }
}

// in 判断属性是否在对象里
function foo2(n:{username:string}|{age:number}){
  // n.username  报错，不确定是否有这个属性
  if('username' in n){
    n.username
  }
}

// instanceof
class Foo{
  username='xiaominf'
}
class Bar{
  age=123
}
function baz(n:Foo|Bar){
   // n.username  报错，不确定是否有这个属性
   if(n instanceof Foo){
    n.username
   }
}

// 字面量
function foo4(n:'username'|123){
  // n.length  报错，不确定是否有这个属性
  if(n==='username'){
    n.length
  }
}

// is类型谓词，可以做到类型保护
function isString(n:any):n is string{
  return typeof n ==='string'
}
function foo5(n:string|number){
  if(isString(n)){
    n.length
  }
}