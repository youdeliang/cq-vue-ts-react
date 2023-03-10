let b: bigint = 1n
// 联合类型：类型之间进行间或的操作
let a21: string | number = "hello"
a21 = 123
// 交叉类型：类型之间进行与的操作，一般用于对象,都满足才行
type A = {
  username: string
}
type B = {
  age: number
}

let a1: A | B = {
  username: "sajdfasd",
}
let a2: A & B = {
  username: "sfsdf",
  age: 12,
}
