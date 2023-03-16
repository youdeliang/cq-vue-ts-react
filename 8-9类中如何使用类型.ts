export {}

// 不添加初始值
class Foo {
  username!: string
}

// 添加初始值
class Foo1 {
  username: string = "hello"
}

// 添加初始值
class Foo2 {
  username: string
  constructor() {
    this.username = "nice"
  }
}

// 添加初始值,要先定义属性
class Foo3 {
  username: string
  constructor(username: string) {
    this.username = username
  }
  showName = (n: number): number => {
    return n
  }
}

let a: Foo = new Foo()
let a1: Foo1 = new Foo1()
let a2: Foo2 = new Foo2()
let a3: Foo3 = new Foo3("world")
let a4 = a3.showName(3)

// 接口在类中的使用,类型兼容性写法
interface IB {
  username: string
  age: number
  showName(n: string): void
}

// 可以多不可以少
class Baz implements IB {
  username: string = "nice"
  age: number = 123
  showName = (n: string) => {}
}

// 泛型和类的使用
class Bar<T> {
  username: T
  constructor(username: T) {
    this.username = username
  }
}

new Bar<string>("xiaoming")

class C1 extends Bar<string> {}
new C1("xioaming")

interface IC<T> {
  username: T
  age: number
  showName(n: T): void
}

class C2 implements IC<string> {
  username: string = "nice"
  age: number = 123
  showName = (n: string) => {}
}

new C2()
