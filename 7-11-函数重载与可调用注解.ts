function fooReload(n: number, m: number, q: number, c: number): any
function fooReload(n: number, m: number): any

function fooReload(n: number, m?: number, q?: number, c?: number) {}

fooReload(1, 2)
fooReload(1, 2, 3, 4)
// fooReload(1, 3, 4) 报错

function fooReload1(n: number, m: string): any
function fooReload1(n: string, m: string): any
function fooReload1(n: number | string, m: string | number) {}
fooReload1(1, "2")
fooReload1("1", "2")
// fooReload1(1, 3) // 报错

// 可调用注解
// type Abc = () => void
// 等价
type Abc = {
  (): void
}
let abc: Abc = () => {}

type Abc3 = {
  (n: number, m: string): any
  (n: string, m: string): any
}
function fooReload3(n: number, m: string): any
function fooReload3(n: string, m: string): any
function fooReload3(n: number | string, m: string | number) {}
// 这俩个有啥区别 ??
let absd: Abc3 = fooReload3
let absd1 = fooReload3

type Abb = {
  (n: number): number
  username?: string
}

let abb: Abb = n => {
  return n
}
abb.username = "nasfjas"
