export {}
//字面类型
type A ='username'|'age'
let a:A ='username'

// keyof 
interface Ib{
  username:string,
  age:number
}
// 使用keyof将接口转化为直面类型
let a2:keyof Ib='age'

let obj={
  username:'xiaoming',
  age:12
}

let a3: keyof typeof obj='username'