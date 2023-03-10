// TS:实参的个数跟形参的个数必须相同，如果不确定的参数，可以用可选项表示
function foo1(age: number, male?: string): boolean {
  return true
}
foo1(1)

// 函数表达式
let foo2: (age: number, male?: string) => boolean = function () {
  return true
}
foo2(1)

// void类型：表示函数没有任何返回值的得到的类型
let foo3 = function (): void {
  //void 可以不return的，也可以return undefined
  // return
  return undefined
}

let foo4 = function (): undefined {
  //undefined 必须写return
  return
}

export {}