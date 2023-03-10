enum Roles {
  SUPER_ADMIN,
  MANAGER,
  ADMIN = 5,
  USER,
}
console.log("Roles :>> ", Roles.SUPER_ADMIN) // 0
console.log("Roles :>> ", Roles[0]) //  SUPER_ADMIN
console.log("Roles :>> ", Roles.MANAGER) // 1
console.log("Roles :>> ", Roles[1]) // MANAGER
console.log("Roles :>> ", Roles.ADMIN) // 5
console.log("Roles :>> ", Roles[5]) // ADMIN
console.log("Roles :>> ", Roles.USER) // 6
console.log("Roles :>> ", Roles[6]) // USER
console.log("Roles :>> ", Roles) // {0: 'SUPER_ADMIN', 1: 'MANAGER', 5: 'ADMIN', 6: 'USER', SUPER_ADMIN: 0, MANAGER: 1, ADMIN: 5, USER: 6}

// 字符串枚举不具有反向映射功能
enum Roles2 {
  SUPER_ADMIN = "super_admin",
  MANAGER = "mange",
}

console.log("Roles2 :>> ", Roles2.SUPER_ADMIN) // super_admin
// console.log("Roles2 :>> ", Roles2[0]) //不具有该映射

// 枚举既可以做为值,也可以作为类型
let aRole: Roles2.SUPER_ADMIN = Roles2.SUPER_ADMIN

//  为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举
const enum Roles3 {
  SUPER_ADMIN = "super_admin",
  MANAGER = "mange",
}
