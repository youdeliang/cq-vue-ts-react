type A={
  username:string,
  age?:number,  //表示age是可选项
  //  索引签名
  [index:string]:any
}
let aa:A={
  username:"hello",
  gender:'male',
  1:"213112"
}

type Aa={
  [index:number]:any
}
let aa1:Aa = [12,true]
let aa3:Aa ={
  23:355
}

// 类型断言 可以让对象初始值为空对象
let arr9:number[]=[]
type Obj ={
  username:string
}
let obj={} as Obj
obj.username = 'heelo'

// 数组中对象
let json:{username:string}[] = []
json[0] = {
  username:'3232'
}