// never类型，一般是自动推测出来的
// 可以检测数据结果
function foo(n: 1 | 2 | 3) {
  switch (n) {
    case 1:
      break
    case 2:
      break
    case 3:
      break
    default: //检测n是否可以走到这里，看所有值是否全部被使用到
      let m: never = n
      break
  }
}
foo(1)

// any类型-----尽量不使用，使用后，就不会自动检测了
let any_a: any = 123
any_a = "2342"

// unknown类型 ----
let bb: unknown = 123
bb = "23sds"
// any不进行检测，unknown使用的时候，TS默认会进行检测
// bb.map(item => item)  // 通过类型断言使其正确
