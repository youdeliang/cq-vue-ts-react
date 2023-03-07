// 接口
// 支持索引签名，函数也可以用接口
interface Ia{
 readonly username:string,
  age?:number,
  [index:string]:string|number|undefined,
}

let a:Ia={
  username:'xiaoming',
  afe:123,
}
// a.username = '1232'  //报错，因为该属性只读


// 接口与类型别名的区别
// 对象类型
type A={
  name:string
}
type Aa = string
let aa:Aa='123'
interface Iaa {}

// 接口合并
interface IB{
  name:string
}
interface IB{
  age:number
}

let bi1:IB={
  name:'323',
  age:124
}

// 会报类型重复的错误
// type BB={
//   name:string,
// }

// type BB={
//   age:number
// }

//接口继承
interface IC{
  name:string
}
interface IC1 extends IC{
  age:number
}
let cc:IC1={name:'sd',age:12}

// type具有映射类型
type DD={
  [P in 'username'|'awge']:string
}

// 把这个变成模块，隔离开
export {}